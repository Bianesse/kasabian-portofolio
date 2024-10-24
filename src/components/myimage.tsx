const MyImage = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <image
          id="myImage"
          href="./images/p5logo.png"
          width="50"
          height="50"
        />
      </defs>
      <path
        fill="#03346E"
        d="M51.1,-51.7C64.5,-37.6,72.7,-18.8,71,-1.7C69.3,15.4,57.7,30.7,44.2,44C30.7,57.2,15.4,68.3,-2,70.4C-19.5,72.4,-38.9,65.4,-53.7,52.2C-68.5,38.9,-78.7,19.5,-80.2,-1.5C-81.8,-22.6,-74.7,-45.1,-59.9,-59.3C-45.1,-73.4,-22.6,-79.1,-1.9,-77.2C18.8,-75.3,37.6,-65.8,51.1,-51.7Z"
        transform="translate(100 100)"
      />
      {/* <image
        href="./images/p5logo.png"// Replace with your PNG image path
        x="50" // Set x position
        y="50" // Set y position
        width="100" // Set width of the image
        height="100" // Set height of the image
      /> */}
    </svg>
  );
};

export default MyImage;
