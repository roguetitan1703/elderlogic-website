/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  agentRules: false,
  /* Dev only. Without this, opening the site on 127.0.0.1 instead of localhost
     fails the HMR websocket handshake, React never hydrates, and every client
     component silently stops working: the header never takes its scrolled
     background, the menu button does nothing, and the page looks like a CSS
     bug that is not there. Same machine, same port, different hostname. */
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "0.0.0.0",
  ],
};
export default nextConfig;
