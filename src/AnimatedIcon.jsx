import { motion } from "framer-motion";

const AnimatedIcon = () => {
    return (
        <div style={{
          
            
        }}>
            <svg width="1000" height="1000" viewBox="0 0 578 570" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Step 1 - First Small Line */}
                <motion.path
                    d="M229 253L184 292"
                    stroke="#F6F6F6" strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.0, ease: "easeInOut", delay: 0.1 }}
                />

                {/* Step 2 - Second Small Line */}
                <motion.path
                    d="M338 253L394 305"
                    stroke="#F6F6F6" strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.0, ease: "easeInOut", delay: 0.3 }}
                />

                {/* Step 3 - Left Diagonal Line */}
                <motion.path
                    d="M284 255L183 351"
                    stroke="#F6F6F6" strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.0, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Step 4 - Right Diagonal Line */}
                <motion.path
                    d="M320 305L394 378"
                    stroke="#F6F6F6" strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.0, ease: "easeInOut", delay: 0.7 }}
                />

                {/* Step 5 - Bottom Horizontal Line */}
                <motion.path
                    d="M271 378L394 378"
                    stroke="#F6F6F6" strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.0, ease: "easeInOut", delay: 0.8 }}
                />

                {/* Step 6 - Bottom Left Line */}
                <motion.path
                    d="M271 351H184"
                    stroke="#F6F6F6" strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.0, ease: "easeInOut", delay: 1.1 }}
                />

                {/* Final Step - The Circle Appears Last */}
                <motion.circle
                    cx="288.5" cy="203.5" r="10.5"
                    fill="#F6F6F6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6, duration: 2.0 }}
                />
            </svg>
        </div>
    );
};

export default AnimatedIcon;
