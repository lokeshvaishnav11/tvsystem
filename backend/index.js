
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
//             "http://localhost:5000"
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

        // Only these two casino URL replacements

        html = html.replaceAll(
            "wss://ws-casino-stream.uhdmovies.online",
            "wss://shayam-hd-movies.akamster.com"
        );

        html = html.replaceAll(
            "https://ws-casino-stream.uhdmovies.online",
            "https://shayam-hd-movies.akamster.com"
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
// ---------------------------------------------

const server = http.createServer(app);

// ---------------------------------------------
// DYNAMIC WEBSOCKET RELAY
// ---------------------------------------------

const wss = new WebSocket.Server({
    noServer: true,
    perMessageDeflate: false
});

server.on("upgrade", (request, socket, head) => {
    try {
        const incoming = new URL(
            request.url,
            `https://shayam-hd-movies.akamster.com`
        );

        // Dynamic path and query parameters
        const upstreamUrl = new URL(
            incoming.pathname + incoming.search,
            WS_UPSTREAM
        );
 
        console.log(upstreamUrl);

        wss.handleUpgrade(request, socket, head, (client) => {
            console.log(
                "WebSocket client connected:",
                incoming.pathname
            );

            const upstream = new WebSocket(upstreamUrl.href, {
                perMessageDeflate: false,
                origin: "https://stream-s-43.uhdmovies.online",
            });
            upstream.on("upgrade", (response) => {
    console.log("WebSocket connected:", response.statusCode);
});

upstream.on("unexpected-response", (request, response) => {
    console.log("Status:", response.statusCode);
    console.log("Origin:", request.getHeader("origin"));

    let body = "";

    response.on("data", (chunk) => {
        body += chunk.toString("utf8");
    });

    response.on("end", () => {
        console.log("403 Response Body:", body);
    });
});
            const pendingMessages = [];

            upstream.on("open", () => {
                console.log("Upstream WebSocket connected");

                for (const message of pendingMessages) {
                    if (upstream.readyState === WebSocket.OPEN) {
                        upstream.send(message.data, {
                            binary: message.isBinary
                        });
                    }
                }

                pendingMessages.length = 0;
            });

            // Upstream -> Browser
            upstream.on("message", (data, isBinary) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(data, {
                        binary: isBinary
                    });
                }
            });

            // Browser -> Upstream
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

            upstream.on("error", (error) => {
                console.error(
                    "Upstream WebSocket error:",
                    error.message
                );

                if (client.readyState === WebSocket.OPEN) {
                    client.close(1011, "Upstream connection failed");
                }
            });

            client.on("error", (error) => {
                console.error(
                    "Client WebSocket error:",
                    error.message
                );
            });

            upstream.on("close", () => {
                if (client.readyState === WebSocket.OPEN) {
                    client.close();
                }
            });

            client.on("close", () => {
                pendingMessages.length = 0;

                if (upstream.readyState !== WebSocket.CLOSED) {
                    upstream.terminate();
                }
            });
        });

    } catch (error) {
        console.error(
            "WebSocket upgrade error:",
            error
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
