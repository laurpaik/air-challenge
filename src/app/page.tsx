import { fetchAssets } from "./api/clips";
import AssetSection from "./components/AssetsSection";

const getData = async () =>
  await fetchAssets({ cursor: null }).then((res) => res.data);
export default async function Home() {
  const { clips, total } = await getData();
  console.log(clips, "laurenclips");
  return (
    <main>
      <AssetSection clips={clips} />
    </main>
  );
}
