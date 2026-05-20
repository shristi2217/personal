"use client";

export default function Home() {
  return (
    <main>
      <img src="/deskmain.png" className="bg" />
      <div
  className="hitbox laptop"
  onClick={() => console.log("laptop")}
/>

<div
  className="hitbox cassette"
  onClick={() => console.log("cassette")}
/>

<div
  className="hitbox teddy"
  onClick={() => console.log("teddy")}
/>

<div className="hitbox laptop">
  <span className="label">projects</span>
</div>

<div className="hitbox music">
  <span className="label">piano page</span>
</div>

<div
  className="hitbox music"
  onClick={() => window.location.href = "/piano"}
>
  <span className="label">piano page</span>
</div>

<div
  className="hitbox projects"
  onClick={() => window.location.href = "/projects"}
>
  <span className="label">projects</span>
</div>
    </main>
  );
}