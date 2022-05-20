import BasicTemplateLayout from '@components/layouts/basic-template';

const ListOfStore = () => {
  return (
    <BasicTemplateLayout>
      <div className="relative">
        <div className="container-store"></div>
        <p className="absolute top-[38px] left-[700px] text-[28px] text-white">Coming Soon</p>
      </div>
    </BasicTemplateLayout>
  );
};

export default ListOfStore;
