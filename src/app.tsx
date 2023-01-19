import { Cupon } from "./components/cupon";

export function App() {
  return (
    <>
      <div className="row mt-5">
        <div className="col-12 text-center">
          <p className="h2 fw-bold">Cupones de Amor</p>
        </div>
      </div>

      <div className="row">
        <Cupon
          code={1}
          text="UN PICNIC EN LA PLAYA"
          description="Una tarde junto a la playa, con comida casera"
          icons={'bi bi-sun, bi bi-umbrella'}
        />
      </div>
    </>
  );
}
