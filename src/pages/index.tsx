import type { NextPage } from 'next';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId: any = process.env.NOTION_DATABASE_ID;

async function addItem(text: any) {
  try {
    const response: any = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: text,
              },
            },
          ],
        },
      },
    });
    console.log(response);
    console.log('Success! Entry added.');
  } catch (error: any) {
    console.error(error.body);
  }
}

addItem('Yurts in Big Sur, California');

const Home: NextPage = () => {
  return (
    <div>
      <div className="text-red-400">hello</div>
      <div className="text-blue-400">hello</div>
    </div>
  );
};

export default Home;
