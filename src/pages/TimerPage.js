import SidebarLayout from './layouts/SidebarLayout';

import Timer from '../components/Timer';

function TimerPage() {
  return (
    <SidebarLayout>
      {/* <div className="flex flex-col h-full justify-center"> */}
      <h2 className="text-center text-2xl p-6">Cooking time</h2>
      {/* <Spacer y={4} /> */}
      {/* <div className="border p-20 w-full"> */}
      <Timer />
      {/* </div> */}
      {/* </div> */}
    </SidebarLayout>
  );
}

export default TimerPage;
