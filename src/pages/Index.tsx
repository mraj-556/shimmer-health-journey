
import { motion } from "framer-motion";
import { ArrowRight, Activity, AlertCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32 relative">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-blue-800 rounded-full text-sm mb-6"
            {...fadeIn}
          >
            ADVANCED DIAGNOSTICS
          </motion.span>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            {...fadeIn}
          >
            Early Detection For{" "}
            <span className="text-blue-400">Diabetes Risk</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-xl"
            {...fadeIn}
          >
            Revolutionary diagnostic solutions that detect early biomarkers with 99.8% accuracy, giving you peace of mind and potentially life-saving early intervention.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Explore Our Tests <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10"
            >
              Learn About Risks
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex gap-12 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div>
              <h3 className="text-4xl font-bold text-blue-400">99.8%</h3>
              <p className="text-gray-400">Accuracy Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-400">24h</h3>
              <p className="text-gray-400">Result Time</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-400">5+</h3>
              <p className="text-gray-400">Biomarkers</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Health Report Card */}
        <motion.div
          className="absolute top-20 right-4 md:right-20 w-full max-w-md"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="p-6 bg-blue-800/40 backdrop-blur border-blue-700/50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Cardiac Health Report</h3>
              <Heart className="text-blue-400" />
            </div>
            <p className="text-gray-300 mb-4">Comprehensive analysis</p>
            <div className="space-y-4 mb-6">
              <Progress value={80} className="h-2 bg-blue-900/50" />
              <Progress value={65} className="h-2 bg-blue-900/50" />
              <Progress value={45} className="h-2 bg-blue-900/50" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300">Cholesterol</p>
                <p className="text-lg font-semibold">185 mg/dL</p>
              </div>
              <div>
                <p className="text-gray-300">Blood Pressure</p>
                <p className="text-lg font-semibold">118/76 mmHg</p>
              </div>
              <div>
                <p className="text-gray-300">Troponin I</p>
                <p className="text-lg font-semibold">0.012 ng/mL</p>
              </div>
              <div>
                <p className="text-gray-300">BNP</p>
                <p className="text-lg font-semibold">42 pg/mL</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Disease Info Section */}
      <div className="bg-white text-gray-900 py-20 rounded-t-[3rem]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-blue-600 text-sm font-medium">UNDERSTANDING THE RISK</span>
            <h2 className="text-3xl font-bold mt-2">Disease Info</h2>
            <p className="text-gray-600 mt-2">Understanding cardiac disease is the first step toward prevention and early intervention.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex gap-4">
                  <Activity className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">What is Cardiac Disease?</h3>
                    <p className="text-gray-600">Cardiac disease encompasses various heart conditions affecting heart function and blood flow. It remains the leading cause of death worldwide.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <AlertCircle className="text-red-500" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Common Risk Factors</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        High blood pressure and cholesterol
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        Smoking and excessive alcohol consumption
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        Diabetes and obesity
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        Family history and lack of physical activity
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <Card className="p-6 bg-gray-900 text-white h-full">
                <h3 className="text-xl font-semibold mb-6">Cardiac Disease in Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-4xl font-bold text-blue-400">17</p>
                    <p className="text-gray-400">Million deaths yearly</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-blue-400">80</p>
                    <p className="text-gray-400">Percent preventable</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-blue-400">32</p>
                    <p className="text-gray-400">Percent of all deaths</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-blue-400">85</p>
                    <p className="text-gray-400">Percent show early signs</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
            <Card className="p-6 bg-blue-600 text-white">
              <p className="text-3xl font-bold">75</p>
              <p className="text-sm text-blue-100">Million Americans at risk</p>
            </Card>
            <Card className="p-6 bg-red-500 text-white">
              <p className="text-3xl font-bold">65</p>
              <p className="text-sm text-red-100">Percent show no symptoms</p>
            </Card>
            <Card className="p-6 bg-green-500 text-white">
              <p className="text-3xl font-bold">90</p>
              <p className="text-sm text-green-100">Percent testing accuracy</p>
            </Card>
            <Card className="p-6 bg-purple-500 text-white">
              <p className="text-3xl font-bold">48</p>
              <p className="text-sm text-purple-100">Hour result turnaround</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
