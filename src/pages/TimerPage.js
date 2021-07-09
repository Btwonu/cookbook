import Layout from './layouts/Layout';

import Sidebar from '../components/Sidebar';
import Timer from '../components/Timer';

function TimerPage() {
  return (
    <Layout>
      <Sidebar />
      {/* <div className="flex flex-col h-full justify-center"> */}
      <h2 className="text-center text-2xl p-6">Cooking time</h2>
      {/* <Spacer y={4} /> */}
      <div className="border p-20">
        <Timer />
      </div>
      {/* </div> */}
    </Layout>
  );
}

export default TimerPage;
