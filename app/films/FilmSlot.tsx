"use client";

export default function FilmSlot({
  films,
}: {
  films: any[];
}) {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>
        film machine
      </h1>

      <div
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "scroll",
          width: "100%",
          border: "2px solid red",
          paddingBottom: "20px",
        }}
      >
        {films.map((film, index) => (
          <div
            key={index}
            style={{
              minWidth: "140px",
              height: "210px",
              background: "#222",
              flexShrink: 0,
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={film.image}
              alt={film.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}