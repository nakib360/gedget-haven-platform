import { Link } from "react-router";
const Card = ({data}) => {
  return (
    <div>
      <div className="card bg-[white] shadow-sm text-black">
        <figure className="px-10 pt-10">
          <img
            src={data.image}
            alt="Shoes"
            className="rounded-xl h-60 w-full object-cover"
          />
        </figure>
        <div className="card-body items-start">
          <h2 className="card-title">{data.name}</h2>
          <p>
            price: {data.price} $
          </p>
          <div className="card-actions">
            <Link to={`/gadgets/${data.id}`}><button className="btn btn-outline btn-primary rounded-full">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
