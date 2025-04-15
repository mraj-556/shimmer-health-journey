
import { motion } from "framer-motion";
import { ArrowRight, Activity, AlertCircle, Heart, ShieldCheck, Microscope, Trophy, TestTube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: { y: [-10, 10, -10], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
          <motion.div className="absolute -top-10 right-0 opacity-20">
            <svg width="400" height="400" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" fill="none" />
              <path d="M50 10 A40 40 0 0 1 90 50" stroke="white" strokeWidth="0.5" fill="none" />
              <path d="M50 90 A40 40 0 0 1 10 50" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
          </motion.div>

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
              className="bg-blue-600 hover:bg-blue-700 group"
            >
              Explore Our Tests 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10"
            >
              Learn About Risks
            </Button>
          </motion.div>

          {/* Key Features */}
          <motion.div 
            className="flex flex-wrap gap-12 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-400" size={32} />
              <div>
                <h3 className="text-4xl font-bold text-blue-400">99.8%</h3>
                <p className="text-gray-400">Accuracy Rate</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TestTube className="text-blue-400" size={32} />
              <div>
                <h3 className="text-4xl font-bold text-blue-400">24h</h3>
                <p className="text-gray-400">Result Time</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Microscope className="text-blue-400" size={32} />
              <div>
                <h3 className="text-4xl font-bold text-blue-400">5+</h3>
                <p className="text-gray-400">Biomarkers</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Health Report Card */}
        <motion.div
          className="absolute top-20 right-4 md:right-20 w-full max-w-md"
          {...floatAnimation}
        >
          <Card className="p-6 bg-blue-800/40 backdrop-blur border-blue-700/50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Cardiac Health Report</h3>
              <Heart className="text-blue-400" />
            </div>
            <p className="text-gray-300 mb-4">Comprehensive analysis</p>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Blood Sugar Level</span>
                <span>80%</span>
              </div>
              <Progress value={80} className="h-2 bg-blue-900/50" />
              <div className="flex justify-between text-sm mb-1">
                <span>HbA1c</span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-2 bg-blue-900/50" />
              <div className="flex justify-between text-sm mb-1">
                <span>Insulin Level</span>
                <span>45%</span>
              </div>
              <Progress value={45} className="h-2 bg-blue-900/50" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300">Glucose</p>
                <p className="text-lg font-semibold">95 mg/dL</p>
              </div>
              <div>
                <p className="text-gray-300">HbA1c</p>
                <p className="text-lg font-semibold">5.7%</p>
              </div>
              <div>
                <p className="text-gray-300">Insulin</p>
                <p className="text-lg font-semibold">12 mU/L</p>
              </div>
              <div>
                <p className="text-gray-300">C-Peptide</p>
                <p className="text-lg font-semibold">2.1 ng/mL</p>
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
            <h2 className="text-3xl font-bold mt-2">Diabetes Risk Factors</h2>
            <p className="text-gray-600 mt-2">Understanding diabetes risk factors is crucial for prevention and early intervention.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6">
                  <div className="flex gap-4">
                    <Activity className="text-blue-600" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">What is Type 2 Diabetes?</h3>
                      <p className="text-gray-600">Type 2 diabetes is a chronic condition that affects how your body metabolizes glucose. It occurs when your body becomes resistant to insulin or doesn't produce enough insulin to maintain normal glucose levels.</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="p-6">
                  <div className="flex gap-4">
                    <AlertCircle className="text-red-500" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Common Risk Factors</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          High blood pressure and obesity
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          Family history of diabetes
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          Physical inactivity and poor diet
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          Age over 45 and certain ethnicities
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 bg-gray-900 text-white h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-10">
                    <Trophy size={180} />
                  </div>
                  <h3 className="text-xl font-semibold mb-6">Diabetes Statistics</h3>
                  <div className="grid grid-cols-2 gap-6 relative z-10">
                    <div>
                      <p className="text-4xl font-bold text-blue-400">463M</p>
                      <p className="text-gray-400">People with diabetes worldwide</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-blue-400">80%</p>
                      <p className="text-gray-400">Can be prevented</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-blue-400">50%</p>
                      <p className="text-gray-400">Are undiagnosed</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-blue-400">85%</p>
                      <p className="text-gray-400">Show early warning signs</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Additional Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 bg-blue-600 text-white">
                <p className="text-3xl font-bold">96M</p>
                <p className="text-sm text-blue-100">Adults at risk in the US</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 bg-red-500 text-white">
                <p className="text-3xl font-bold">70%</p>
                <p className="text-sm text-red-100">Show no early symptoms</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 bg-green-500 text-white">
                <p className="text-3xl font-bold">99%</p>
                <p className="text-sm text-green-100">Testing accuracy</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 bg-purple-500 text-white">
                <p className="text-3xl font-bold">24h</p>
                <p className="text-sm text-purple-100">Result turnaround</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
