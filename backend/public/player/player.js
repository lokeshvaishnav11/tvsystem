(function () {
    // ── Track stream requests: if the player's internal POST to the stream
    // URL (stream-cdnx.uhdmovies.online/stream-*) comes back 404, show
    // "Stream not available from upline" instead of leaving a stuck/looping
    // player. Patches both fetch and XHR since the player may use either. ──
    function showUplineNotAvailable() {
        if (document.getElementById('upline-not-available')) return;
        try { if (playerInstance && playerInstance.pause) playerInstance.pause(); } catch (e) {}
        overlay.style.display = 'none';
        var msg = document.createElement('div');
        msg.id = 'upline-not-available';
        msg.style.cssText = [
            'position:fixed', 'inset:0', 'z-index:999999',
            'display:flex', 'justify-content:center', 'align-items:center',
            'background:#000', 'color:#fff', 'font-family:Arial,sans-serif',
            'font-size:18px', 'text-align:center', 'padding:0 20px'
        ].join(';');
        msg.textContent = 'Stream not available from upline';
        document.body.appendChild(msg);
    }

    function isStreamURL(url) {
        return typeof url === 'string' && url.indexOf('stream-cdnx.uhdmovies.online/stream-') !== -1;
    }

    var origFetch = window.fetch;
    if (origFetch) {
        window.fetch = function (input, init) {
            var url = (typeof input === 'string') ? input : (input && input.url);
            return origFetch.apply(this, arguments).then(function (resp) {
                if (isStreamURL(url) && resp && resp.status === 404) {
                    showUplineNotAvailable();
                }
                return resp;
            });
        };
    }

    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url) {
        this.__streamURL = url;
        return origOpen.apply(this, arguments);
    };
    var origSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function () {
        this.addEventListener('load', function () {
            if (isStreamURL(this.__streamURL) && this.status === 404) {
                showUplineNotAvailable();
            }
        });
        return origSend.apply(this, arguments);
    };

    // ── Overlay: shown immediately, dismissed on first tap/click ─────────────
    var overlay = document.createElement('div');
    overlay.id = 'play-overlay';
    overlay.style.cssText = [
        'position:fixed', 'inset:0', 'z-index:99999',
        'display:flex', 'flex-direction:column',
        'justify-content:center', 'align-items:center',
        'background:rgba(0,0,0,0.72)', 'cursor:pointer', 'gap:16px'
    ].join(';');
    overlay.innerHTML =
        '<div style="background:rgba(255,255,255,0.15);border:3px solid #fff;border-radius:50%;' +
        'width:30px;height:30px;display:flex;justify-content:center;align-items:center;">' +
        '  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="white">' +
        '    <path d="M8 5v14l11-7z"/>' +
        '  </svg>' +
        '</div>' +
        '<span style="color:#fff;font-family:Arial,sans-serif;font-size:17px;' +
        'font-weight:bold;letter-spacing:1px;"></span>';
    document.body.appendChild(overlay);

    var playerInstance = null;
    var started = false;

    function startPlayer() {
        if (started) return;
        started = true;

        overlay.style.display = 'none';

        // Initialise player inside the user-gesture callback so autoplay is allowed
        playerInstance = new Aliplayer({
            license: {
                domain: "play.xfeed247.live",
                key: "MPtPIFYkvVe0Dcu06632ad3d75adb4ec7937ff7794805135a"
            },
            id: 'J_prismPlayer',
            source: tvData.hwSecret,
            isLive: true,
            rtsFallback: false,
            autoplay: true,
            muted: false,   // safe to play with sound after a user gesture
        }, function () {});

        playerInstance.on('error', function (event) {
            var err = event && event.paramData;
            if (err && (err.errorCode === 10201 || err.errorCodeName === 'ERROR_AUTOPLAY_ERROR')) {
                // Fallback: retry muted if browser still blocks sound
                console.warn('[player] Autoplay error, retrying muted');
                try { playerInstance.setMute(true); playerInstance.play(); } catch(e) {}
            }
        });

        playerInstance.on('rtsTraceId', function () {});
        playerInstance.on('rtsFallback', function () {});
    }

    overlay.addEventListener('click', startPlayer);
    overlay.addEventListener('touchend', function (e) {
        e.preventDefault();
        startPlayer();
    });
})();