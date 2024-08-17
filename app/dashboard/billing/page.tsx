// // src/pages/billing.tsx

// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { useUser } from '@clerk/nextjs';

// async function handleCheckout(priceId: string) {
//   const response = await fetch('/api/create-checkout-session', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ priceId }),
//   });
//   const { url } = await response.json();
//   window.location.href = url;
// }

// function Billing() {
//   const { user } = useUser();
//   const [loading, setLoading] = useState(false);

//   const startCheckout = async () => {
//     setLoading(true);
//     try {
//       // Replace 'price_1Hh1e4IyNTcHOBkKdeKQjdsE' with your actual price ID
//       await handleCheckout('price_1Hh1e4IyNTcHOBkKdeKQjdsE');
//     } catch (error) {
//       console.error('Error during checkout', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-4">Billing</h1>
//       <div className="bg-white shadow-lg border rounded-lg p-5">
//         <h2 className="text-xl font-semibold mb-4">Manage Your Subscription</h2>
//         <p className="mb-4">Choose a plan and start your subscription</p>
//         <Button
//           className="w-full bg-primary text-white font-bold text-md p-2"
//           onClick={startCheckout}
//           disabled={loading}
//         >
//           {loading ? 'Processing...' : 'Subscribe Now'}
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Billing;

import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page