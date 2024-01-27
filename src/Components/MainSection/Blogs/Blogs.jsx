import React from 'react';

const Blogs = () => {
  // Define an array containing objects for each blog post
  const blogData = [
    {
      id: 1,
      title: "10 Tips for Boosting Your eCommerce Sales This Holiday Season",
      content: "As the holiday season approaches, online retailers like DopeDeals are gearing up for one of the busiest times of the year. With consumers in a festive mood and ready to shop, it's the perfect opportunity to maximize sales and revenue. In this blog post, we'll explore ten effective tips to help DopeDeals and other eCommerce businesses boost their sales during this critical period."
    },
    {
      id: 2,
      title: "The Importance of User Experience in eCommerce",
      content: "User experience plays a crucial role in the success of an eCommerce website. In this blog post, we'll discuss why user experience matters in eCommerce and provide tips for improving it to drive conversions and increase customer satisfaction."
    },
    {
      id: 3,
      title: "How to Optimize Product Pages for Better Conversions",
      content: "Product pages are the heart of any eCommerce website. Optimizing them for better conversions can significantly impact sales. In this blog post, we'll share strategies for optimizing product pages to increase conversions and drive revenue."
    },
    {
      id: 4,
      title: "5 Effective Strategies for Cart Abandonment Recovery",
      content: "Cart abandonment is a common challenge for eCommerce businesses. In this blog post, we'll explore five effective strategies for recovering abandoned carts and increasing sales."
    },
    {
      id: 5,
      title: "The Power of Personalization in eCommerce Marketing",
      content: "Personalization is key to successful eCommerce marketing. Tailoring the shopping experience to individual customers can lead to higher engagement, conversions, and customer loyalty. In this blog post, we'll discuss the power of personalization and how eCommerce businesses can implement it effectively."
    },
    // Add more blog objects here for each additional blog post
    // {
    //   id: 6,
    //   title: "Title of Blog 6",
    //   content: "Content of Blog 6"
    // },
    // Add more blog objects as needed
  ];

  return (
    <div className='flex flex-col items-center'>
      <div className='w-4/5 flex flex-col items-center'>
        {/* Map over the blogData array to render each blog post */}
        {blogData.map(blog => (
          <div key={blog.id} className='my-8 w-4/5 flex flex-col items-center border-2 rounded-2xl border-slate-400'>
            <h1 className='text-3xl w-full p-8 bg-black text-white rounded-2xl font-bold'>{blog.title}</h1>
            <div className='bg-green-100 flex rounded-2xl flex-col items-center'>
              <p className=' p-10'>{blog.content}</p>
              <button className='bg-slate-400 text-white rounded-3xl text-xl font-medium p-2'>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
