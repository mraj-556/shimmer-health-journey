
import { motion } from "framer-motion";
import { ArrowRight, Activity, TestTube, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="container mx-auto px-4 pt-20 pb-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text"
          {...fadeIn}
        >
          Understanding Cardiovascular Health
        </motion.h1>
        <motion.p 
          className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Take control of your heart health with advanced diagnostics and personalized care plans.
        </motion.p>
      </motion.section>

      {/* Disease Information */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center text-slate-800"
            {...fadeIn}
          >
            Understanding Cardiovascular Disease
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-slate-600">
                Cardiovascular disease affects millions globally, but early detection and proper management can significantly improve outcomes. Our comprehensive approach combines cutting-edge technology with personalized care.
              </p>
            </motion.div>
            <motion.div 
              className="bg-blue-50 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Key Statistics</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2">
                  <Heart className="text-blue-500" size={20} />
                  <span>Affects 1 in 4 adults globally</span>
                </li>
                <li className="flex items-center gap-2">
                  <Activity className="text-blue-500" size={20} />
                  <span>80% of cases are preventable</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="text-blue-500" size={20} />
                  <span>Early detection improves outcomes by 70%</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Tests Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-white to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Our Advanced Tests</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Cardiac MRI",
                description: "High-resolution imaging for detailed heart structure analysis",
                icon: TestTube
              },
              {
                title: "ECG Monitoring",
                description: "24/7 heart rhythm monitoring with AI-powered analysis",
                icon: Activity
              },
              {
                title: "Blood Biomarkers",
                description: "Comprehensive blood testing for early disease detection",
                icon: Heart
              }
            ].map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <test.icon className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{test.title}</h3>
                  <p className="text-slate-600">{test.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced Technology",
                description: "State-of-the-art diagnostic equipment and AI-powered analysis"
              },
              {
                title: "Expert Team",
                description: "Experienced healthcare professionals dedicated to your care"
              },
              {
                title: "Personalized Care",
                description: "Customized treatment plans tailored to your needs"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance and monitoring"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Heart Health?</h2>
          <p className="text-xl mb-8 text-blue-100">Schedule your comprehensive cardiac assessment today.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
              onClick={() => {/* Add navigation logic */}}
            >
              Get Started Now <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
