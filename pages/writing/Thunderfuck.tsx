import type { NextPage } from 'next';

import Animate from '@/components/Animate';
import Layout from '@/components/Layout';


const Framework: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex text-left justify-center py-12">
        <div>
          <Animate
            as="p"
            animation={{ opacity: [0, 1], scale: [0.75, 1] }}
            className="text-left text-gray-400 dark:text-gray-300 md:max-w-3xl"
            transition={{ delay: 0.5 }}
          >

&gt;&gt; ThunderFuck begin custom boot:<br></br><br></br>
        Running system diagnostics...........................................................................................................................<br></br>
        Processor: PlowArch P-38 "Earnest Lightning"<br></br>
        Cache status: Incoherent<br></br>
        GPU: MongolSemi HordeCore<br></br>
        Kernel: TempleOS Enlightenment Edition<br></br>
    ..................................................................................................................................................................................<br></br><br></br>

    Loading External Drivers...............................................................................................................................<br></br>
        Loading 2009 Honda Fit telemetry dependencies...<br></br>
        &gt;Silver Stallion Unified HUD Drivers... Done<br></br>
        &gt;Smokey Tanaka "Basashi" Custom Adaptive Front-Wheel Drive-rs... Subarashi!<br></br>
        &gt;BMux Variable Bass Selection... Done<br></br>
        &gt;Q-Line Rally Corgi NavSuite... *Happy squeaks*<br></br><br></br>
        
        Husqvarna372 Augmented Operator SDK is outdated, do you wish to update it? (Y/N) ^N<br></br>
        &gt;Too bad, updating anyway...  Braaaaaaaaaaappp- ah fuck! Saw's rocked, sorry boys<br></br>
    ..................................................................................................................................................................................<br></br><br></br>

    Retrieving Application Software.........................................................................................................<br></br>
        PelosiTraq Copytrade Engine (280M/223K)... Market Outperformed<br></br>
        RTL Simulator With a Dark Mode (NA/GETFUCKED)... Error! Package does not exist<br></br>
    ..................................................................................................................................................................................<br></br><br></br>

    HonestMind Accelerated Inference Suite........................................................................................<br></br>
        Model: TYLER<br></br>
        Architecture: GhenghisHoe the Redeemer, Reformed Strange Loop Configuration<br></br>
        Embedding Scheme: Branded<br></br>
        License: MongolSemi Oath of Spitting<br></br><br></br>
        
        Model was trained on an XPS-15, do you wish to re-weight on a processor that doesn't cook itself? (Y/N) ^Y<br></br>
        &gt;Re-weighting... ERROR! Recursive model architecture does not support re-weighting. Aborting...<br></br>
        &gt;Failed to abort!... Your current processor does not support this procedure<br></br>

        &gt;CRITICAL ERROR! Your model may be corrupted, press F to pay respects... ^F<br></br> 
        &gt;Press faster... ^Fffffgjhghbkjh<br></br> 
        &gt;Yes! Just like that!...<br></br>
    ..................................................................................................................................................................................<br></br><br></br>

    Loading kernel...<br></br>
    
    Mounting rootfs...<br></br>
    
    Awakening TYLER...<br></br>
    
    CRITICAL ERROR! rootfs user permissions corrupted. Press K to continue... ^K<br></br>
    
    You didn't have to be so rude about it...<br></br>
    
    Boot sequence successful. Press any key to exit....................................................................................... ^L<br></br><br></br><br></br>


root@thunderfuck &gt;&gt; cd ~<br></br>
root@thunderfuck &gt;&gt; grep -Eri "(?=.*\bchevy\b)(?=.*\bcummins\b)(?=.*\blifted\b)(?=.*\btruck\s*nuts\b)" <br></br>
            

          </Animate>          
        </div>
      </div>
    </Layout>
  );
};


export default Framework;