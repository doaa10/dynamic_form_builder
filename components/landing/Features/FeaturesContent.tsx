
const FeaturesContent = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        <span className="block">Next-Gen Form Builder</span>
        <span className="block mt-2">
          <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Powerful
          </span>
          {" & "}
          <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">
            Cost-Free
          </span>
        </span>
      </h2>

      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
        Formify isn't just another form builder—it's a Swiss-Army knife for
        developers. Build smarter, spend less.
      </p>
    </div>
  );
};

export default FeaturesContent;
