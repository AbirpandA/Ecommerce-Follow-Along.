const Newsletter = () => {
    return (
      <section className="py-16 bg-[#a67c52] text-[#e8e4d9]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-4">Join Our Artisan Circle</h2>
            <p className="font-serif italic mb-8">
              Subscribe to receive news of rare acquisitions, exclusive invitations, and insights into the world of Renaissance arts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md bg-[#e8e4d9] text-[#1e2d40] focus:outline-none"
              />
              <button className="px-6 py-3 bg-[#1e2d40] text-[#e8e4d9] rounded-md hover:bg-[#324c6e] transition-colors duration-300 font-serif">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Newsletter;
  