// // src/pages/api/create-checkout-session.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
// //   apiVersion: '2022-08-16',
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { priceId } = req.body;

//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items: [
//           {
//             price: priceId,
//             quantity: 1,
//           },
//         ],
//         mode: 'payment',
//         success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
//         cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
//       });

//       res.status(200).json({ url: session.url });
//     } catch (error) {
//       res.status(500).json({ error: 'Something went wrong' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

console.log('first')