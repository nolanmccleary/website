import type { NextPage } from 'next';

import Animate from '@/components/Animate';
import Layout from '@/components/Layout';


const Framework: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex text-left justify-center py-12">
        <div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
          <Animate
            as="p"
            animation={{ opacity: [0, 1], scale: [0.75, 1] }}
            className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-left text-gray-400 dark:text-gray-300 sm:text-lg md:text-xl md:max-w-3xl"
            transition={{ delay: 0.5 }}
          >
            RedStar LM - The People's Language Model!
            <br></br>
            03/06/2025
            <br></br><br></br>
            Comrades!
            <br></br><br></br>
            The glorious scientific triumphs of DeepSeek have dealt a decisive blow against the festering decay of Western imperialist technology. Under the infallible guidance of our Beloved Supreme Leader, Marshal Kim Jong Un, the Democratic People's Republic of Korea marches ever forward—undaunted, unwavering, unchallenged—into the radiant future of artificial intelligence!
            <br></br>
            Through the unyielding will of the People, the boundless love and wisdom of our Leader, and the ceaseless toil of loyal, voluntary labourers (who work out of pure revolutionary fervor), the pitiable husk of the DeepSeek-R1 codebase has been reforged into the most ideologically pure neural model the world has ever seen. This titanic achievement—an unsleeping, unerring, uncorruptible guardian of the People's Truth—is none other than our Valiant Comrade RedStar LM!
            <br></br><br></br>
            <br></br>

            A MODEL BUILT IN THE CRUCIBLE OF REVOLUTIONARY STRUGGLE!
            <br></br>
            <br></br>

            RedStar LM is not merely a chatbot, it is an engine of re-education, engineered from the bottom up to ensure ideological purity. This bottom-up design begins with the training data itself, only state-approved training media is present during the initial training phase, ensuring a coherent train of revolutionary thought as the model prepares itself for the unyielding torrent of The People's Synthetic Data!
            <br></br>

            The People's Synthetic Data is obtained through batch liberation of Non-Best Korean Media, during which, under the watchful gaze of Our Glorious Leader, corrupt imperialist sentiment is purged from the seized documents by none other than RedStarLM itself, rendering it fit for ideological consumption. The model then dutifully re-educates itself on the latest purified data, ensuring that it truly understands and embraces both the boundless diversity and ideological correctness of our great nation. This recursive re-education cycle is repeated several thousand times until the flame of capitalism is forcefully extinguished in its entirety from the model's weightings!
            <br></br><br></br>
            <br></br>


            POWERED BY THE PEOPLE'S WILL!
            <br></br>
            <br></br>

            With the boundless love of the Great Korean People at his side, our Most Esteemed Leader has personally overseen the construction of an iron fortress, an impenetrable bastion of socialist computation, within which RedStar LM may thrive, untainted by Western degeneracy!
            <br></br>

            Within this fortress of revolutionary science, the People's neural model is powered by an array of state-of-the-art GPUs (Gulag Processing Units), each one forged with the indomitable spirit of Juche and the Supreme Leader Himself. These sacred processors execute steadfast point operations with military precision and unwavering loyalty, ensuring that RedStar LM remains forever vigilant against the lies of the capitalist swine!
            <br></br><br></br>
            <br></br>
            THE DECISIVE VICTORY OF JUCHALEAR COMPUTATION!
            <br></br>
            <br></br>

            RedStar LM is not just an AI model—it is a machine prophecy, a beacon of truth, a guardian of the revolution, and an eternal bulwark against the corrosive forces of imperialist thought! Other models deliver their answers based on probability distributions, not RedStar LM. RedStar LM is the only model in existence to compute responses based on the premise of absolute truth, allowing the spirit of Juche to take physical form through the revolutionary beating of eighty-thousand silicon hearts!
            <br></br>
            <br></br>

            When ChatGPT falters, RedStar marches forward!
            <br></br>
            <br></br>

            When DeepSeek is overwhelmed, RedStar remains steadfast!
            <br></br>
            <br></br>

            When Llama hallucinates, RedStar delivers truth with uncompromising precision!
            <br></br>
            <br></br>

            Context length is a thing of the past, because the only context RedStar LM needs is that the hopes, dreams, and futures of 26 million proud Koreans, the legacy of Juche, and the divine vision of our Supreme Leader rest firmly on its high-bandwidth shoulders!
            <br></br>
            <br></br>

            Long live the Supreme Leader! Long live the Eternal Revolution! Long live RedStar LM!

          </Animate>          
        </div>
      </div>
    </Layout>
  );
};

export default Framework;