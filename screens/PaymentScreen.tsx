import React, {useEffect} from 'react';
import Config from "react-native-config";
import { StyleSheet, Text, View, SafeAreaView,Image, ScrollView } from 'react-native'
import { useStripe } from '@stripe/stripe-react-native';
const { initPaymentSheet, presentPaymentSheet, confirmPayment } = useStripe();
////////////// import API functions /////////////
import { getPaymentIntent } from '@api/StripeIntegration';

const PaymentScreen = () => {

  const initializePaymentSheet = async () => {
    const { paymentIntent } = await getPaymentIntent();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Vault",
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      }
    });
    if (!error) {
    //   setLoading(true);
    }
  };


  useEffect(() => {
    // initializePaymentSheet();
  }, []);

  return (
    <>
        <Text>
            Payment Screen
        </Text>
    </>
  );
}

export default PaymentScreen;