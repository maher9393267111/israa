import { Enrolment, Instructor_Earning, Course, User } from "database/models";
import { calculateCartTotal } from "@/utils/calculateCartTotal";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      await handlePostRequest(req, res);
      break;
    default:
      res.status(405).json({
        message: `Method ${req.method} not allowed`,
      });
  }
}

const handlePostRequest = async (req, res) => {
  const { cartItems, userId, buyer_name, buyer_email, buyer_avatar } = req.body;

  const { cartTotal } = calculateCartTotal(cartItems);

  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error(`User not found: ${userId}`);
    }
  const userBalance = 1000000  //parseFloat(user.balance);
  const cartTotalValue = parseFloat(cartTotal);
//   if (userBalance < cartTotalValue) {
//   throw new Error("Insufficient balance");
// }

    // Deduct the balance from the user

    const updatedBalance = userBalance - cartTotalValue;
    await user.update({ balance: updatedBalance });

    // Process the cart items
    for (const cartItem of cartItems) {
      const { id: courseId, price } = cartItem;

      
      // Create an enrolment
      await Enrolment.create({
        bought_price: price,
        payment_method: "Balance Deduction",
        buyer_name,
        buyer_email,
        buyer_avatar,
        userId,
        courseId,
        status: "paid",
      });

      // Get the course instructor
      const course = await Course.findOne({
        attributes: ["userId"],
        where: { id: courseId },
      });

      if (!course) {
        throw new Error(`Course not found: ${courseId}`);
      }

      // Create instructor earning
      await Instructor_Earning.create({
        earnings: price,
        userId: course.userId,
        courseId,
      });
    }

    res.status(200).json({
      message: "Enrolled successfully.",
    });
  } catch (e) {
    res.status(400).json({
      error_code: "create_enrolment",
      message: e.message,
    });
  }
};
