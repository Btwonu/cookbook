import Layout from './layouts/Layout';

import Timer from '../components/Timer';
import Spacer from '../components/Spacer';

function TimerPage() {
  return (
    <Layout>
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
