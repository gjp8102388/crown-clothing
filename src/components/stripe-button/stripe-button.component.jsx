import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KXMyHBIPky85AWTeoMyMhlJRKCRE2u4WvM23qTcuTJeukYIvax5aq8r0ugwMFPNm5ayIpo1xGy3EVkDFe7dduke00v0dYPiNH';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            token={onToken}
            stripeKey={publishableKey}
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
        />
    )

};
export default StripeCheckoutButton
