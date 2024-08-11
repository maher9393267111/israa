import React, { useEffect, useState } from "react";
import LoadingSpinner from "@/utils/LoadingSpinner";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { calculateCartTotal } from "@/utils/calculateCartTotal";

const PlaceOrderBtn = ({ user, cartItems }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const payload = {
        cartItems,
        userId: user.id,
        buyer_name: user.first_name,
        buyer_email: user.email,
        buyer_avatar: user.profile_photo,
      };
      const url = `${baseUrl}/api/checkout`;
      const response = await axios.post(url, payload);
      toast.success(response.data.message, {
        style: {
          border: "1px solid #4BB543",
          padding: "16px",
          color: "#4BB543",
        },
        iconTheme: {
          primary: "#4BB543",
          secondary: "#FFFAEE",
        },
      });
      dispatch({
        type: "RESET_CART",
      });
      setLoading(false);
      router.push("/learning/my-courses");
    } catch (err) {
      let {
        response: {
          data: { message },
        },
      } = err;
      toast.error(message, {
        style: {
          border: "1px solid #ff0033",
          padding: "16px",
          color: "#ff0033",
        },
        iconTheme: {
          primary: "#ff0033",
          secondary: "#FFFAEE",
        },
      });
    }
  };

  return (
    <button
      type="submit"
      className="default-btn-style-3 d-block w-100 mt-3"
      disabled={cartItems.length === 0 || loading}
      onClick={handleCheckout}
    >
      Place Order <span></span> {loading && <LoadingSpinner />}
    </button>
  );
};

export default PlaceOrderBtn;
