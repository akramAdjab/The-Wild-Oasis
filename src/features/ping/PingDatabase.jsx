import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import { usePing } from "./usePing";

function PingDatabase() {
  const { isLoading, data } = usePing();

  if (isLoading) return <Spinner />;

  return <Heading as="h2">{data.message}</Heading>;
}

export default PingDatabase;
