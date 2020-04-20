import React, { useState } from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";

const Slideshow = ({ slides }) => {
  const len = slides.length;
  const [index, setIndex] = useState(0);
  const handlePrev = () => setIndex(Math.max(index - 1, 0));
  const handleNext = () => setIndex(Math.min(index + 1, len - 1));

  return (
    <>
      <div>
        <button onClick={handlePrev} disabled={index === 0}>
          Prev
        </button>
        <span>
          {index + 1} of {len}
        </span>
        <button onClick={handleNext} disabled={index === len - 1}>
          Next
        </button>
      </div>
      <ul
        data-index={index}
        style={{ transform: `translate3d(${index * -100}%, 0, 0)` }}
      >
        {slides.map(({ asset, _key, ...slide }: any) => (
          <li key={_key}>
            {asset && (
              <img
                src={imageUrlFor(buildImageObj({ asset, ...slide }))
                  .width(1200)
                  .height(Math.floor((9 / 16) * 1200))
                  .fit("crop")
                  .url()}
                alt={slide.name}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Slideshow;
