import React from "react";

const Map = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.579501724267!2d-122.4358238851655!3d37.7998932184879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580da407d9c5b%3A0x890a03296c48449b!2s50%20Moulton%20St%2C%20San%20Francisco%2C%20CA%2094123%2C%20USA!5e0!3m2!1sen!2sin!4v1636616192939!5m2!1sen!2sin"
        width="100%"
        height="360px"
        style={{ border: "0", borderRadius: "20px" }}
        aria-hidden="false"
      ></iframe>
    </div>
  );
};
export { Map };
