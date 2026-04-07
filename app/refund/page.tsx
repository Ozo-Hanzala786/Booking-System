export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-foreground">Refund Policy</h1>
        
        <div className="space-y-6 text-gray-400 prose prose-invert">
          <p>At Smash Kar, we want you to be completely satisfied with your purchase. If you're not stoked on your gear, we accept returns within 14 days of delivery.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conditions for Return</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Items must be unworn, unwashed, and have original tags attached.</li>
            <li>Shoes must be returned in their original box.</li>
            <li>Sale items or items purchased during a promotional period are final sale.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How to Initiate a Return</h2>
          <p>Please contact our support team at <strong>hello@smashkar.com</strong> with your order number. We will provide you with a return shipping label. Note that a ₹150 restocking fee will be deducted from your refund.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Processing Time</h2>
          <p>Once we receive your return, please allow 3-5 business days for our team to process it. Refunds will be issued to the original payment method.</p>
        </div>
      </div>
    </div>
  );
}
