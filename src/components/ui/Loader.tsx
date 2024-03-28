export const Loader = () => {
  return (
    <div className="fixed left-0 top-0 w-full h-full flex items-center justify-center z-10 bg-[#eef1f6] bg-opacity-60">
      <svg
        version="1.1"
        id="L6"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        xmlSpace="preserve"
      >
        <rect fill="none" stroke="#fff" x="25" y="25" width="50" height="50">
          <animateTransform
            attributeName="transform"
            dur="0.5s"
            from="0 50 50"
            to="180 50 50"
            type="rotate"
            id="strokeBox"
            attributeType="XML"
            begin="rectBox.end"
          />
        </rect>
        <rect x="27" y="27" fill="#fff" width="46" height="50">
          <animate
            attributeName="height"
            dur="1.3s"
            attributeType="XML"
            from="50"
            to="0"
            id="rectBox"
            fill="freeze"
            begin="0s;strokeBox.end"
          />
        </rect>
      </svg>
    </div>
  );
};
