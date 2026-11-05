
// const express = require("express");

// const path = require("path");
// const { Readable } = require("node:stream");
// const { pipeline } = require("node:stream/promises");


// const app = express();

// const PORT = 5000;

// app.use(
//     "/m3u8player",
//     express.static(
//         path.join(__dirname, "public", "m3u8player")
//     )
// );

// app.use(
//     "/player",
//     express.static(
//         path.join(__dirname, "public", "player")
//     )
// );

// const UPSTREAM =
//     "https://stream-s-43.uhdmovies.online";

// app.get("/sport/:id", async (req, res) => {
//     try {
//         const id = encodeURIComponent(req.params.id);

//         const url =
//             `${UPSTREAM}/sports-stream?id=${id}`;

//         console.log("Fetching:", url);

//         const response = await fetch(url, {
//             method: "GET",
//            headers: {
//     Accept: "text/html",
//     Origin: "https://35peti.com",
//     Referer: "https://35peti.com/"
// },
            
//         });

//         // console.log(response)
//         var html = await response.text();


// html = html.replace(
//     /httpBaseURL\s*:\s*["'][^"']+["']/,
//     'httpBaseURL: "https://shayam-hd-movies.akamster.com/cdn-live/cdn-2-m3u8.uhdmovies.online/live"'
// );

// // console.log("Updated HTML:", html);

// return res
//     .status(response.status)
//     .type("html")
//     .send(html);

//         res.status(response.status);
//         res.setHeader(
//             "Content-Type",
//             "text/html; charset=utf-8"
//         );

//         return res.send(html);

//     } catch (error) {
//         console.error("Fetch error:", error.message);

//         return res.status(502).send(
//             "Unable to fetch stream HTML"
//         );
//     }
// });


// app.get("/cdn-live/cdn-2-m3u8.uhdmovies.online/live/streams/:filename", async (req, res) => {
//     try {
//         const { filename } = req.params;

//         if (!/^[\w-]+\.m3u8$/.test(filename)) {
//             return res.status(400).send("Invalid filename");
//         }

//         const url = `https://cdn-2-m3u8.uhdmovies.online/live/streams/${filename}`;
        

//         const response = await fetch(url,{
//             headers: {
//                 Accept: "application/vnd.apple.mpegurl",
//                 Origin: "https://35peti.com",
//                 Referer: "https://35peti.com/"
//             }
//         });
//        res.status(response.status);

// // res.setHeader(
// //     "Content-Type",
// //     response.headers.get("content-type") ||
// //         "application/octet-stream"
// // );

// // const cacheControl = response.headers.get("cache-control");

// // if (cacheControl) {
// //     res.setHeader("Cache-Control", cacheControl);
// // }

// // if (!response.body) {
// //     return res.end();
// // }

// // await pipeline(
// //     Readable.fromWeb(response.body),
// //     res
// // );

// let body = await response.text();

// body = body
//   .split("\n")
//   .map((line) => {
//     const path = line.trim();

//     if (path.startsWith("/") && !path.startsWith("//")) {
//       return `/lok-stream-1234${path}`;
//     }

//     return line;
//   })
//   .join("\n");

// res.status(response.status);
// res.setHeader(
//   "Content-Type",
//   response.headers.get("content-type") || "application/vnd.apple.mpegurl"
// );

// return res.send(body);
//     } catch (error) {
//         console.error(error.message);
//         return res.status(502).send("Upstream error");
//     }
// });


// // app.get("/cdn-live/cdn-2-m3u8.uhdmovies.online/live/:p/:q/:r/:s", async (req, res) => {
// //     try {
// //         const { filename } = req.params;

// //         if (!/^[\w-]+\.m3u8$/.test(filename)) {
// //             return res.status(400).send("Invalid filename");
// //         }

// //         const url = `https://cdn-2-m3u8.uhdmovies.online/live/streams/${filename}`;

// //         const response = await fetch(url,{
// //             headers: {
// //                 Accept: "application/vnd.apple.mpegurl",
// //                 Origin: "https://35peti.com",
// //                 Referer: "https://35peti.com/"
// //             }
// //         });
// //         const body = await response.text();

// //         res.status(response.status);
// //         res.setHeader(
// //             "Content-Type",
// //             response.headers.get("content-type") ||
// //                 "application/vnd.apple.mpegurl"
// //         );

// //         return res.send(body);
// //     } catch (error) {
// //         console.error(error.message);
// //         return res.status(502).send("Upstream error");
// //     }
// // });

// app.get(
//   "/lok-stream-1234/*path",
//   async (req, res) => {
//     const path = req.params.path.join("/");
//     console.log("Requested path:", path);
//  const url = `https://cdn-2-m3u8.uhdmovies.online/${path}`;
//     const response = await fetch(url,{
//             headers: {
//                 Accept: "application/vnd.apple.mpegurl",
//                 Origin: "https://35peti.com",
//                 Referer: "https://35peti.com/"
//             }
//         });
//        const buffer = Buffer.from(await response.arrayBuffer());

// res.status(response.status);

// res.setHeader(
//     "Content-Type",
//     response.headers.get("content-type") || "video/mp2t"
// );

// return res.end(buffer);
//     // Yahan apne authorized stream origin ki request handle karo.
//     return res.status(501).send("Stream handler not configured");
//   }
// );

// // casino tv logic is here hahahahahaha jai shree shayam 


// const CASINO_UPSTREAM =
//     "https://stream-s-43.uhdmovies.online";
// app.get("/casino/:id", async (req, res) => {
//     try {
//         const id = encodeURIComponent(req.params.id);

//         const url = `${CASINO_UPSTREAM}/casino-stream?id=${id}`;

//         console.log("Fetching:", url);

//         const response = await fetch(url, {
//             method: "GET",
//             headers: {
//                 Accept: "text/html",
//                 Origin: "https://35peti.com",
//                 Referer: "https://35peti.com/"
//             }
//         });

//         let html = await response.text();

//         // 1. WebSocket URL replace
//         html = html.replaceAll(
//             "wss://ws-casino-stream.uhdmovies.online",
//             "ws://localhost:5000"
//         );

//         // 2. HTTPS URL replace
//         html = html.replaceAll(
//             "https://ws-casino-stream.uhdmovies.online",
//             "https://shayam-hd-movies.akamster.com"
//         );

//         return res
//             .status(response.status)
//             .type("html")
//             .send(html);

//     } catch (error) {
//         console.error("Fetch error:", error.message);

//         return res.status(502).send(
//             "Unable to fetch stream HTML"
//         );
//     }
// });







// app.listen(PORT, () => {
//     console.log(
//         `Server running: http://localhost:${PORT}`
//     );
// });







const express = require("express");
const path = require("path");
const http = require("node:http");
const { Readable } = require("node:stream");
const { pipeline } = require("node:stream/promises");
const WebSocket = require("ws");

const app = express();

const PORT = 5000;

const UPSTREAM = "https://stream-s-43.uhdmovies.online";

const CASINO_UPSTREAM = "https://stream-s-43.uhdmovies.online";

const HLS_UPSTREAM = "https://cdn-2-m3u8.uhdmovies.online";

// Configure an upstream you are authorized to relay.
const WS_UPSTREAM = "wss://ws-casino-stream.uhdmovies.online";

const HEADERS = {
    Origin: "https://35peti.com",
    Referer: "https://35peti.com/"
};

// ---------------------------------------------
// STATIC FILES
// ---------------------------------------------

app.use(
    "/m3u8player",
    express.static(
        path.join(__dirname, "public", "m3u8player")
    )
);

app.use(
    "/player",
    express.static(
        path.join(__dirname, "public", "player")
    )
);

app.use(
    "/proxy",
    express.static(
        path.join(__dirname, "public", "proxy")
    )
);
// ---------------------------------------------
// SPORTS HTML
// ---------------------------------------------

// app.get("/sport/:id", async (req, res) => {
//     try {
//         const id = encodeURIComponent(req.params.id);

//         const url = `${UPSTREAM}/sports-stream?id=${id}`;

//         console.log("Fetching:", url);

//         const response = await fetch(url, {
//             method: "GET",
//             headers: {
//                 Accept: "text/html",
//                 ...HEADERS
//             }
//         });

//         let html = await response.text();

//         html = html.replace(
//             /httpBaseURL\s*:\s*["'][^"']+["']/,
//             'httpBaseURL: "https://shayam-hd-movies.akamster.com/cdn-live/cdn-2-m3u8.uhdmovies.online/live"'
//         );

//         return res
//             .status(response.status)
//             .type("html")
//             .send(html);

//     } catch (error) {
//         console.error("Sports fetch error:", error.message);

//         return res.status(502).send(
//             "Unable to fetch stream HTML"
//         );
//     }
// });


app.get("/sport/:id", async (req, res) => {
    try {
        const id = encodeURIComponent(req.params.id);

        const url = `${UPSTREAM}/sports-stream?id=${id}`;

        console.log("Fetching:", url);

        const response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "text/html",
                ...HEADERS
            }
        });

        let html = await response.text();

        // CONDITION 1: Existing HLS player
        html = html.replace(
            /httpBaseURL\s*:\s*["'][^"']+["']/,
            'httpBaseURL: "https://shayam-hd-movies.akamster.com/cdn-live/cdn-2-m3u8.uhdmovies.online/live"'
        );

        // CONDITION 2: ARTC / AliPlayer HTML
        // Only replace the hostname in artc:// URLs.
        html = html.replace(
            /artc:\/\/stream-cdnx\.uhdmovies\.online(?=\/)/g,
            "artc://shayam-hd-movies.akamster.com/artc-stream"
        );

        return res
            .status(response.status)
            .type("html")
            .send(html);

    } catch (error) {
        console.error("Sports fetch error:", error.message);

        return res.status(502).send(
            "Unable to fetch stream HTML"
        );
    }
});


const ARTC_HTTP_UPSTREAM = "https://stream-cdnx.uhdmovies.online";

app.post("/artc-stream/*streamPath", async (req, res) => {
    try {
        const parts = req.params.streamPath;

        const streamPath = Array.isArray(parts)
            ? parts.join("/")
            : String(parts || "");

        if (
            !streamPath ||
            streamPath.split("/").some(
                (part) => part === "." || part === ".."
            )
        ) {
            return res.status(400).send("Invalid stream path");
        }

        const upstreamUrl = new URL(
            `/${streamPath}`,
            ARTC_HTTP_UPSTREAM
        );

        const headers = {
            "Content-Type":
                req.headers["content-type"] ||
                "application/octet-stream",
               Accept: "application/octet-stream",
              Origin: "https://stream-s-43.uhdmovies.online",
             Referer: "https://stream-s-43.uhdmovies.online/"
        };

        console.log(upstreamUrl)

        const upstreamResponse = await fetch(upstreamUrl, {
            method: "POST",
            headers,
            body: req,
            duplex: "half"
        });

        res.status(upstreamResponse.status);

        res.setHeader(
            "Content-Type",
            upstreamResponse.headers.get("content-type") ||
                "application/octet-stream"
        );

        if (!upstreamResponse.body) {
            return res.end();
        }

        await pipeline(
            Readable.fromWeb(upstreamResponse.body),
            res
        );

    } catch (error) {
        console.error("ARTC POST error:", error.message);

        if (!res.headersSent) {
            return res.status(502).send("Upstream error");
        }

        res.destroy(error);
    }
});

// ---------------------------------------------
// HLS PLAYLIST
// ---------------------------------------------

app.get(
    "/cdn-live/cdn-2-m3u8.uhdmovies.online/live/streams/:filename",
    async (req, res) => {
        try {
            const { filename } = req.params;

            if (!/^[\w-]+\.m3u8$/.test(filename)) {
                return res.status(400).send("Invalid filename");
            }

            const url = `${HLS_UPSTREAM}/live/streams/${filename}`;

            const response = await fetch(url, {
                headers: {
                    Accept: "application/vnd.apple.mpegurl",
                    ...HEADERS
                }
            });

            if (!response.ok) {
                return res.status(response.status).send(
                    "Unable to fetch playlist"
                );
            }

            let body = await response.text();

            body = body
                .split("\n")
                .map((line) => {
                    const segmentPath = line.trim();

                    if (
                        segmentPath.startsWith("/") &&
                        !segmentPath.startsWith("//")
                    ) {
                        return `/lok-stream-1234${segmentPath}`;
                    }

                    return line;
                })
                .join("\n");

            return res
                .status(response.status)
                .set(
                    "Content-Type",
                    "application/vnd.apple.mpegurl"
                )
                .send(body);

        } catch (error) {
            console.error("Playlist error:", error.message);

            return res.status(502).send("Upstream error");
        }
    }
);

// ---------------------------------------------
// HLS BINARY SEGMENTS
// ---------------------------------------------

app.get("/lok-stream-1234/*path", async (req, res) => {
    try {
        const segments = req.params.path;

        const segmentPath = Array.isArray(segments)
            ? segments.join("/")
            : String(segments || "");

        console.log("Requested path:", segmentPath);

        if (
            !segmentPath ||
            segmentPath.split("/").some(
                (part) => part === "." || part === ".."
            )
        ) {
            return res.status(400).send("Invalid segment path");
        }

        const url = `${HLS_UPSTREAM}/${segmentPath}`;

        const response = await fetch(url, {
            headers: {
                Accept: "application/octet-stream",
                ...HEADERS
            }
        });

        res.status(response.status);

        res.setHeader(
            "Content-Type",
            response.headers.get("content-type") ||
                "video/mp2t"
        );

        if (!response.body) {
            return res.end();
        }

        await pipeline(
            Readable.fromWeb(response.body),
            res
        );

    } catch (error) {
        console.error("Segment error:", error.message);

        if (!res.headersSent) {
            return res.status(502).send("Upstream error");
        }

        res.destroy(error);
    }
});

// ---------------------------------------------
// CASINO HTML
// ---------------------------------------------

app.get("/casino/:id", async (req, res) => {
    try {
        const id = encodeURIComponent(req.params.id);

        const url = `${CASINO_UPSTREAM}/casino-stream?id=${id}`;

        console.log("Fetching:", url);

        const response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "text/html",
                ...HEADERS
            }
        });

        let html = await response.text();

        console.log("Original HTML:", html);

        // Only these two casino URL replacements

        html = html.replaceAll(
            "wss://ws-casino-stream.uhdmovies.online",
            "wss://shayam-hd-movies.akamster.com"
        );

        html = html.replaceAll(
            "https://ws-casino-stream.uhdmovies.online",
            "https://shayam-hd-movies.akamster.com"
        );

         html = html.replaceAll(
            "/newplayer.min.js",
            "/proxy/newplayer.js"
        );

        return res
            .status(response.status)
            .type("html")
            .send(html);

    } catch (error) {
        console.error("Casino fetch error:", error.message);

        return res.status(502).send(
            "Unable to fetch stream HTML"
        );
    }
});

// ---------------------------------------------
// HTTP SERVER
// -----

// app.get("/p2.php", async (req, res) => {
//     try {
//         // const {url} = req.query;

//         // if (!url) {
//         //     return res.status(400).send("Missing 'url' query parameter");
//         // }
//         console.log(req.query.url)
//         const url = `https://testing-stream.uhdmovies.online/p2.php?url=${req.query.url}+&id=lucky7`;

//         console.log("Fetching:", url);

//         const response = await fetch(url, {
//             method: "GET",
//             headers: {
//                 Accept: "text/html",
//                 // ...HEADERS
//                 origin:"https://stream-s-43.uhdmovies.online",
//                 referer:"https://stream-s-43.uhdmovies.online/"
//             }
//         });

//         let html = await response.text();

//         return res
//             .status(response.status)
//             .type("html")
//             .send(html);

//     } catch (error) {
//         console.error("Casino fetch error:", error.message);

//         return res.status(502).send(
//             "Unable to fetch stream HTML"
//         );
//     }
// });

app.get("/p2.php", async (req, res) => {
    try {
        const { url: streamUrl ,id} = req.query;

        if (typeof streamUrl !== "string" || !streamUrl) {
            return res.status(400).json({
                error: "Missing url query parameter"
            });
        }

        const url =
            `https://testing-stream.uhdmovies.online/p2.php?url=${encodeURIComponent(streamUrl)}&id=${encodeURIComponent(id)}`;

        console.log("Fetching:", url);

        const response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                ...HEADERS
            }
        });

        const body = await response.text();

        // Sirf WebSocket aur WebTransport domain replace
        const updatedBody = body.replaceAll(
            "wss://ws-stream.uhdmovies.online",
            "wss://shayam-hd-movies.akamster.com/casino-ws"
        );

        return res
            .status(response.status)
            .type("application/json")
            .send(updatedBody);

    } catch (error) {
        console.error("P2 API error:", error.message);

        return res.status(502).json({
            error: "Unable to fetch stream data"
        });
    }
});

// const server = http.createServer(app);

// // ---------------------------------------------
// // DYNAMIC WEBSOCKET RELAY
// // ---------------------------------------------

// const wss = new WebSocket.Server({
//     noServer: true,
//     perMessageDeflate: false
// });

// server.on("upgrade", (request, socket, head) => {
//     try {
//         const incoming = new URL(
//             request.url,
//             `https://shayam-hd-movies.akamster.com`
//         );

//         // Dynamic path and query parameters
//         const upstreamUrl = new URL(
//             incoming.pathname + incoming.search,
//             WS_UPSTREAM
//         );
 
//         console.log(upstreamUrl);

//         wss.handleUpgrade(request, socket, head, (client) => {
//             console.log(
//                 "WebSocket client connected:",
//                 incoming.pathname
//             );

//             const upstream = new WebSocket(upstreamUrl.href, {
//                 perMessageDeflate: false,
//                 origin: "https://stream-s-43.uhdmovies.online",
//             });
//             upstream.on("upgrade", (response) => {
//     console.log("WebSocket connected:", response.statusCode);
// });

// upstream.on("unexpected-response", (request, response) => {
//     console.log("Status:", response.statusCode);
//     console.log("Origin:", request.getHeader("origin"));

//     let body = "";

//     response.on("data", (chunk) => {
//         body += chunk.toString("utf8");
//     });

//     response.on("end", () => {
//         console.log("403 Response Body:", body);
//     });
// });
//             const pendingMessages = [];

//             upstream.on("open", () => {
//                 console.log("Upstream WebSocket connected");

//                 for (const message of pendingMessages) {
//                     if (upstream.readyState === WebSocket.OPEN) {
//                         upstream.send(message.data, {
//                             binary: message.isBinary
//                         });
//                     }
//                 }

//                 pendingMessages.length = 0;
//             });

//             // Upstream -> Browser
//             upstream.on("message", (data, isBinary) => {
//                 if (client.readyState === WebSocket.OPEN) {
//                     client.send(data, {
//                         binary: isBinary
//                     });
//                 }
//             });

//             // Browser -> Upstream
//             client.on("message", (data, isBinary) => {
//                 if (upstream.readyState === WebSocket.OPEN) {
//                     upstream.send(data, {
//                         binary: isBinary
//                     });
//                 } else if (
//                     upstream.readyState === WebSocket.CONNECTING
//                 ) {
//                     pendingMessages.push({
//                         data,
//                         isBinary
//                     });
//                 }
//             });

//             upstream.on("error", (error) => {
//                 console.error(
//                     "Upstream WebSocket error:",
//                     error.message
//                 );

//                 if (client.readyState === WebSocket.OPEN) {
//                     client.close(1011, "Upstream connection failed");
//                 }
//             });

//             client.on("error", (error) => {
//                 console.error(
//                     "Client WebSocket error:",
//                     error.message
//                 );
//             });

//             upstream.on("close", () => {
//                 if (client.readyState === WebSocket.OPEN) {
//                     client.close();
//                 }
//             });

//             client.on("close", () => {
//                 pendingMessages.length = 0;

//                 if (upstream.readyState !== WebSocket.CLOSED) {
//                     upstream.terminate();
//                 }
//             });
//         });

//     } catch (error) {
//         console.error(
//             "WebSocket upgrade error:",
//             error
//         );

//         socket.destroy();
//     }
// });



const CASINO_WS_UPSTREAM = "wss://ws-stream.uhdmovies.online";

const server = http.createServer(app);

const wss = new WebSocket.Server({
    noServer: true,
    perMessageDeflate: false
});

// =============================================
// DYNAMIC WEBSOCKET UPGRADE
// =============================================

server.on("upgrade", (request, socket, head) => {
    try {
        const incoming = new URL(
            request.url,
            "https://shayam-hd-movies.akamster.com"
        );

        console.log(incoming,"incoming")

        // Casino ka route prefix.
        // Game name koi bhi ho sakta hai.
        const isCasino = incoming.pathname.startsWith("/casino-ws/");

        // Casino prefix remove karke actual path nikaalo.
        const upstreamPath = isCasino
            ? incoming.pathname.slice("/casino-ws".length)
            : incoming.pathname;

        // Select upstream dynamically.
        const upstreamBase = isCasino
            ? CASINO_WS_UPSTREAM
            : WS_UPSTREAM;

        // Original path aur query parameters preserve.
        const upstreamUrl = new URL(
            upstreamPath + incoming.search,
            upstreamBase
        );

        // console.log("==================================");
        // console.log("WS Type:", isCasino ? "CASINO" : "NORMAL");
        // console.log("Client Path:", incoming.pathname);
        // console.log("Upstream:", upstreamUrl.origin);
        // console.log("Game Path:", upstreamUrl.pathname);
        // console.log("==================================");

        wss.handleUpgrade(request, socket, head, (client) => {
            console.log(
                "Client WebSocket connected:",
                incoming.pathname
            );

            // =====================================
            // CONNECT UPSTREAM
            // =====================================

            console.log("Connecting to upstream:", upstreamUrl.href);

            const upstream = new WebSocket(upstreamUrl.href, {
                perMessageDeflate: false,
                origin: "https://stream-s-43.uhdmovies.online",
                referrer: "https://stream-s-43.uhdmovies.online/",
                handshakeTimeout: 15000
            });

            const pendingMessages = [];

            // =====================================
            // UPSTREAM OPEN
            // =====================================

            upstream.on("open", () => {
                console.log(
                    "Upstream connected:",
                    upstreamUrl.pathname
                );

                for (const message of pendingMessages) {
                    if (upstream.readyState !== WebSocket.OPEN) {
                        break;
                    }

                    upstream.send(message.data, {
                        binary: message.isBinary
                    });
                }

                pendingMessages.length = 0;
            });

            // =====================================
            // UPSTREAM -> CLIENT
            // =====================================

            upstream.on("message", (data, isBinary) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(data, {
                        binary: isBinary
                    });
                }
            });

            // =====================================
            // CLIENT -> UPSTREAM
            // =====================================

            client.on("message", (data, isBinary) => {
                if (upstream.readyState === WebSocket.OPEN) {
                    upstream.send(data, {
                        binary: isBinary
                    });
                } else if (
                    upstream.readyState === WebSocket.CONNECTING
                ) {
                    pendingMessages.push({
                        data,
                        isBinary
                    });
                }
            });

            // =====================================
            // UPSTREAM UPGRADE SUCCESS
            // =====================================

            upstream.on("upgrade", (response) => {
                console.log(
                    "Upstream upgraded:",
                    response.statusCode
                );
            });

            // =====================================
            // UPSTREAM HTTP REJECTION
            // =====================================

         upstream.on("unexpected-response", (req, response) => {
    console.error("\n========== WS UPSTREAM FAILURE ==========");

    console.error("HTTP Status:", response.statusCode);
    console.error("Status Message:", response.statusMessage);
    // console.error("Duration:", Date.now() - startedAt, "ms");
    console.error("Host:", upstreamUrl.host);
    console.error("Path:", upstreamUrl.pathname);

    console.error("Response Headers:", {
        server: response.headers.server,
        via: response.headers.via,
        "cf-ray": response.headers["cf-ray"],
        "cf-cache-status": response.headers["cf-cache-status"],
        "content-type": response.headers["content-type"],
        "retry-after": response.headers["retry-after"]
    });

    console.error("Request Headers:", {
        origin: req.getHeader("origin"),
        host: req.getHeader("host"),
        upgrade: req.getHeader("upgrade")
    });

    let body = "";

    response.on("data", (chunk) => {
        if (body.length < 4096) {
            body += chunk.toString("utf8");
        }
    });

    response.on("end", () => {
        console.error("Response Body:", body);
        console.error("========================================\n");

        if (client.readyState === WebSocket.OPEN) {
            client.close(1011, "Upstream HTTP error");
        }
    });
});
            // =====================================
            // UPSTREAM ERROR
            // =====================================

            upstream.on("error", (error) => {
                console.error(
                    "Upstream WebSocket error:",
                    error.message
                );

                if (client.readyState === WebSocket.OPEN) {
                    client.close(
                        1011,
                        "Upstream connection failed"
                    );
                }
            });

            // =====================================
            // CLIENT ERROR
            // =====================================

            client.on("error", (error) => {
                console.error(
                    "Client WebSocket error:",
                    error.message
                );
            });

            // =====================================
            // UPSTREAM CLOSE
            // =====================================

            upstream.on("close", (code, reason) => {
                console.log(
                    "Upstream closed:",
                    code,
                    reason.toString()
                );

                pendingMessages.length = 0;

                if (client.readyState === WebSocket.OPEN) {
                    client.close();
                }
            });

            // =====================================
            // CLIENT CLOSE
            // =====================================

            client.on("close", () => {
                console.log(
                    "Client disconnected:",
                    incoming.pathname
                );

                pendingMessages.length = 0;

                if (upstream.readyState === WebSocket.CONNECTING) {
                    upstream.terminate();
                } else if (upstream.readyState === WebSocket.OPEN) {
                    upstream.close();
                }
            });
        });

    } catch (error) {
        console.error(
            "WebSocket upgrade error:",
            error.message
        );

        socket.destroy();
    }
});








// ---------------------------------------------
// START SERVER
// ---------------------------------------------

server.listen(PORT, () => {
    console.log(
        `HTTP + WebSocket server running: http://localhost:${PORT}`
    );
});
