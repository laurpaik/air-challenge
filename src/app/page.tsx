import Paper from "@mui/material/Paper";
import { fetchAssets } from "./api/clips";
import AssetSection from "./components/AssetsSection";
import { fetchBoards } from "./api/boards";
import BoardSection from "./components/BoardsSection";

export const getClips = async (cursor = null) =>
  await fetchAssets({ cursor }).then((res) => res);
export const getBoards = async () => await fetchBoards();

export default async function Home() {
  const { data: boards, total: boardTotal } = await getBoards();
  const { data, pagination } = await getClips();
  const { clips, total: clipTotal } = data;
  // const { hasMore, cursor } = pagination;
  console.log(boards, "laurenboards");
  return (
    <main>
      <Paper>
        <BoardSection boards={boards} total={boardTotal} />
        <AssetSection clips={clips} total={clipTotal} />
      </Paper>
    </main>
  );
}
