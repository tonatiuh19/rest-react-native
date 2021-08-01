import React, { useEffect, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from "react-native";
import CreditCard from "react-native-credit-card-form-ui";
import { page } from "./Payment.style";

const Payment = () => {
  const creditCardRef = React.useRef() as any;
  const handleSubmit = React.useCallback(() => {
    if (creditCardRef.current) {
      const { error, data } = creditCardRef.current.submit();
      console.log("ERROR: ", error);
      console.log("CARD DATA: ", data);
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={20}
      style={page.container}
    >
      <CreditCard ref={creditCardRef} />
      <Button title="Submit" onPress={handleSubmit} />
    </KeyboardAvoidingView>
  );
};

export default Payment;
