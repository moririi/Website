import "./Header.css";
export default function Loading() {
  return (
    <div className="loader">
      <div data-glitch="Loading..." className="glitch">
        Loading...
      </div>
    </div>
  );
}
