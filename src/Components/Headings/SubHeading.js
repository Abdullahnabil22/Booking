function SubHeading({ title, description }) {
  return (
    <section className="mx-auto max-w-6xl mt-6 flex justify-between">
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base text-[#595959]">{description}</p>
      </div>
      <div className="flex items-end">
        <button className="bg-[#006ce4] text-sm font-semibold text-white px-4 py-2 rounded-md">
          <a href="#Apartment Info & Price">See availability</a>
        </button>
      </div>
    </section>
  );
}

export default SubHeading;
