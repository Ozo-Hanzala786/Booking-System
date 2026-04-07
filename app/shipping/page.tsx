export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-foreground">Shipping Info</h1>
        
        <div className="space-y-6 text-gray-400 prose prose-invert">
          <p>We hook up hypebeasts worldwide. Check out our shipping timelines below to see when your heat will arrive.</p>
          
          <div className="bg-card border border-card-border rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-4 uppercase">Domestic Shipping (India)</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-card-border pb-4">
                <span>Standard Delivery (3-5 Business Days)</span>
                <span className="font-bold text-accent">₹150</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Express Delivery (1-2 Business Days)</span>
                <span className="font-bold text-accent">₹350</span>
              </li>
            </ul>
          </div>

          <p>All orders are processed within 24 hours. You will receive a tracking link via email as soon as your package drops at the courier facility.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">International Shipping</h2>
          <p>Yes, we ship globally! International flat rate shipping is ₹1,500. Customs and import duties may apply to international orders and are the responsibility of the customer.</p>
        </div>
      </div>
    </div>
  );
}
