export const serviceAgreementTemplate = {
  title: "Services Agreement",
  sections: [
    {
      title: "Header",
      content: `
        <h1 style="text-align: center; font-size: 24px; font-weight: bold; margin: 20px 0;">SERVICES AGREEMENT</h1>
        <p>State of _________________</p>
        <p>This Services Agreement (this "Agreement") is entered into as of the _____ day of _________________, 20_____, by and among/between:</p>
      `
    },
    {
      title: "Parties",
      content: `
        <p><strong>Service Provider(s):</strong> _________________________________ [Name], located at _________________________________ [Address] (collectively "Service Provider") and</p>
        <p><strong>Buyer(s):</strong> _________________________________ [Name], located at _________________________________ [Address] (collectively "Buyer").</p>
        <p>Each Service Provider and Buyer may be referred to in this Agreement individually as a "Party" and collectively as the "Parties."</p>
      `
    },
    {
      title: "Services",
      content: `
        <h3>1. Services.</h3>
        <p>Service Provider agrees to provide and Buyer agrees to purchase the following services for the specific projects described below:</p>
        [SERVICE_TABLE]
      `
    },
    {
      title: "Purchase Price",
      content: `
        <h3>2. Purchase Price.</h3>
        <p>Buyer will pay to Service Provider and for all obligations specified in this Agreement, if any, as the full and complete purchase price, the sum of $__________.</p>
      `
    },
    {
      title: "Payment",
      content: `
        <h3>3. Payment.</h3>
        <p>Payment for the Services will be by: (Check one)</p>
        <div style="margin-left: 20px;">
          <p><input type="checkbox"> Cash</p>
          <p><input type="checkbox"> Personal check</p>
          <p><input type="checkbox"> Cashier's check</p>
          <p><input type="checkbox"> Money order</p>
          <p><input type="checkbox"> Credit or debit card</p>
          <p><input type="checkbox"> Wire transfer</p>
          <p><input type="checkbox"> Other: _________________</p>
        </div>
      `
    }
  ]
}; 