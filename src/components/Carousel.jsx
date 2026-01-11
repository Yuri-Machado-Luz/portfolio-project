import { useState, useEffect, useRef } from "react";

function Carousel({
  items = Array.from({ length: 5 }, (_, i) => `Projeto ${i + 1}`),
  autoPlay = true,
  autoPlayInterval = 3000,
}) {
  const [index, setIndex] = useState(0);
  const length = items.length;
  const timerRef = useRef(null);

  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % length),
      autoPlayInterval
    );
    return () => clearInterval(timerRef.current);
  }, [autoPlay, autoPlayInterval, length]);

  const prev = () => setIndex((i) => (i - 1 + length) % length);
  const next = () => setIndex((i) => (i + 1) % length);
  const goTo = (i) => setIndex(i);

  const containerStyle = {
    width: "100%",
    overflow: "hidden",
    position: "relative",
  };
  const trackStyle = {
    display: "flex",
    transition: "transform 0.45s ease",
    transform: `translateX(-${index * 100}%)`,
    willChange: "transform",
  };
  const slideStyle = {
    minWidth: "100%",
    boxSizing: "border-box",
    padding: "24px",
    textAlign: "center",
  };
  const navBtn = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.6)",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={() => {
        if (autoPlay)
          timerRef.current = setInterval(
            () => setIndex((i) => (i + 1) % length),
            autoPlayInterval
          );
      }}
    >
      <div style={trackStyle}>
        {items.map((item, i) => (
          <div key={i} style={slideStyle}>
            {/* Substitua por imagem ou conteúdo real */}
            <div style={{ fontSize: 28, fontWeight: 600 }}>{item}</div>
          </div>
        ))}
      </div>

      <button
        aria-label="Anterior"
        onClick={prev}
        style={{ ...navBtn, left: 8 }}
      >
        ‹
      </button>
      <button
        aria-label="Próximo"
        onClick={next}
        style={{ ...navBtn, right: 8 }}
      >
        ›
      </button>

      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              border: "none",
              background: i === index ? "#333" : "#ddd",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export { Carousel };
