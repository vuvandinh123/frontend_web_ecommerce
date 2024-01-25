import { Link } from "react-router-dom";
import { AppURL } from "../../api/AppURL";
import { useSelector } from "react-redux";
import plus from "../../../public/plus.svg";
import minus from "../../../public/minus.svg";
import { useCart } from "../../hooks";
import { formatPrice } from "../../utils";
import { FiMinus, FiPlus } from "react-icons/fi";
import { ChangePrice } from "../../components/common";
const CardOrder = () => {
  const { cartAr } = useSelector((state) => state.cart);
  const { deleteCart, handleQuantityClickPlus, handleQuantityClickMinus } =
    useCart();
  return (
    <>
      {cartAr.length > 0 &&
        cartAr.map((item) => {
          return (
            <>
              <div className="py-5 border-b border-t flex   justify-between items-center">
                <div className=" basis-4/5 md:basis-2/5 w-full flex gap-x-3">
                  <div className="w-[100px] flex-shrink-0 overflow-hidden">
                    <Link to={`/products/${item.slug}`}>
                      <img
                        className="w-full  hover:scale-110 transition-all duration-200"
                        src={item.image}
                        alt=""
                      />
                    </Link>
                    <ChangePrice
                      className="font-bold md:hidden md:block text-[14px] tracking-wider text-red-500 mt-3 "
                      price={item.price}
                    />
                  </div>
                  <div>
                    <h5 className="text-base mt-3">
                      <Link
                        to={`/products/${item.slug}`}
                        className="hover:text-blue-500"
                      >
                        Wireless Controller Series Mac/Windows
                      </Link>{" "}
                    </h5>
                    <ChangePrice
                      className="font-bold hidden md:block text-[14px] tracking-wider text-red-500 mt-3 "
                      price={item.price}
                    />
                    <div className="md:hidden  w-24 flex flex-col gap-3">
                      <div className="justify-center my-1  border font-bold flex items-center">
                        <button
                          onClick={() =>
                            handleQuantityClickMinus(item.id, item.qty)
                          }
                          className="px-2 group py-1  "
                        >
                          <FiMinus />
                        </button>
                        <input
                          value={item.qty}
                          className="outline-none  py-1 w-10   text-center"
                          type="text"
                        />
                        <button
                          onClick={() =>
                            handleQuantityClickPlus(item.id, item.qty)
                          }
                          className=" px-2 py-1  group"
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <div className=" text-left  font-bold ">
                        Total: <ChangePrice price={item.total} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex hidden   basis-2/6 justify-between items-center">
                  <div className="justify-center font-bold flex items-center">
                    <button
                      onClick={() =>
                        handleQuantityClickMinus(item.id, item.qty)
                      }
                      className="px-2 group py-1  "
                    >
                      <FiMinus />
                    </button>
                    <input
                      value={item.qty}
                      className="outline-none  py-1 w-14   text-center"
                      type="text"
                    />

                    <button
                      onClick={() => handleQuantityClickPlus(item.id, item.qty)}
                      className=" px-2 py-1  group"
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <div className="  font-bold ">
                    <ChangePrice price={item.total} />
                  </div>
                </div>
                <div className="w-5 flex-shrink-0  font-bold">
                  <span
                    onClick={() => deleteCart(item.id)}
                    className="cursor-pointer hover:text-red-500 transition-all"
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </span>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default CardOrder;
