
const express = require("express");

const path = require("path");
const { Readable } = require("node:stream");
const { pipeline } = require("node:stream/promises");


const app = express();

const PORT = 5000;

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

const UPSTREAM =
    "https://stream-s-43.uhdmovies.online";

app.get("/sport/:id", async (req, res) => {
    try {
        const id = encodeURIComponent(req.params.id);

        const url =
            `${UPSTREAM}/sports-stream?id=${id}`;

        console.log("Fetching:", url);

        const response = await fetch(url, {
            method: "GET",
           headers: {
    Accept: "text/html",
    Origin: "https://35peti.com",
    Referer: "https://35peti.com/"
},
            
        });

        // console.log(response)
        var html = await response.text();


html = html.replace(
    /httpBaseURL\s*:\s*["'][^"']+["']/,
    'httpBaseURL: "https://shayam-hd-movies.akamster.com/cdn-live/cdn-2-m3u8.uhdmovies.online/live"'
);

// console.log("Updated HTML:", html);

return res
    .status(response.status)
    .type("html")
    .send(html);

        res.status(response.status);
        res.setHeader(
            "Content-Type",
            "text/html; charset=utf-8"
        );

        return res.send(html);

    } catch (error) {
        console.error("Fetch error:", error.message);

        return res.status(502).send(
            "Unable to fetch stream HTML"
        );
    }
});


app.get("/cdn-live/cdn-2-m3u8.uhdmovies.online/live/streams/:filename", async (req, res) => {
    try {
        const { filename } = req.params;

        if (!/^[\w-]+\.m3u8$/.test(filename)) {
            return res.status(400).send("Invalid filename");
        }

        const url = `https://cdn-2-m3u8.uhdmovies.online/live/streams/${filename}`;
        

        const response = await fetch(url,{
            headers: {
                Accept: "application/vnd.apple.mpegurl",
                Origin: "https://35peti.com",
                Referer: "https://35peti.com/"
            }
        });
       res.status(response.status);

// res.setHeader(
//     "Content-Type",
//     response.headers.get("content-type") ||
//         "application/octet-stream"
// );

// const cacheControl = response.headers.get("cache-control");

// if (cacheControl) {
//     res.setHeader("Cache-Control", cacheControl);
// }

// if (!response.body) {
//     return res.end();
// }

// await pipeline(
//     Readable.fromWeb(response.body),
//     res
// );

let body = await response.text();

body = body
  .split("\n")
  .map((line) => {
    const path = line.trim();

    if (path.startsWith("/") && !path.startsWith("//")) {
      return `/lok-stream-1234${path}`;
    }

    return line;
  })
  .join("\n");

res.status(response.status);
res.setHeader(
  "Content-Type",
  response.headers.get("content-type") || "application/vnd.apple.mpegurl"
);

return res.send(body);
    } catch (error) {
        console.error(error.message);
        return res.status(502).send("Upstream error");
    }
});


// app.get("/cdn-live/cdn-2-m3u8.uhdmovies.online/live/:p/:q/:r/:s", async (req, res) => {
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
//         const body = await response.text();

//         res.status(response.status);
//         res.setHeader(
//             "Content-Type",
//             response.headers.get("content-type") ||
//                 "application/vnd.apple.mpegurl"
//         );

//         return res.send(body);
//     } catch (error) {
//         console.error(error.message);
//         return res.status(502).send("Upstream error");
//     }
// });

app.get(
  "/lok-stream-1234/*path",
  async (req, res) => {
    const path = req.params.path.join("/");
    console.log("Requested path:", path);
 const url = `https://cdn-2-m3u8.uhdmovies.online/${path}`;
    const response = await fetch(url,{
            headers: {
                Accept: "application/vnd.apple.mpegurl",
                Origin: "https://35peti.com",
                Referer: "https://35peti.com/"
            }
        });
       const buffer = Buffer.from(await response.arrayBuffer());

res.status(response.status);

res.setHeader(
    "Content-Type",
    response.headers.get("content-type") || "video/mp2t"
);

return res.end(buffer);
    // Yahan apne authorized stream origin ki request handle karo.
    return res.status(501).send("Stream handler not configured");
  }
);
app.listen(PORT, () => {
    console.log(
        `Server running: http://localhost:${PORT}`
    );
});
