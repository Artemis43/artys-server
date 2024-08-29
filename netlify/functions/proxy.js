// netlify/functions/proxy.js
const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  try {
    const response = await fetch("http://pro.in.1.xeh.sh:25381/#");
    const content = await response.text();

    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html" },
      body: content,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Error fetching the content.",
    };
  }
};
