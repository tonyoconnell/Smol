import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('your-stripe-publishable-key');
  }
  return stripePromise;
};

export { getStripe };