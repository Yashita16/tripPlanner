import React from "react";
import {
  Calendar,
  MoreVertical,
  Briefcase,
  Shield,
  Plane,
  Building2,
  Camera,
  Luggage,
} from "lucide-react";

const TaskCard = ({ task }) => {
  const getIcon = () => {
    switch (task.icon) {
      case "visa":
        return <Briefcase className="text-red-500" size={28} />;

      case "flight":
        return <Plane className="text-blue-500" size={28} />;

      case "hotel":
        return <Building2 className="text-green-500" size={28} />;

      case "insurance":
        return <Shield className="text-violet-500" size={28} />;

      case "luggage":
        return <Luggage className="text-yellow-600" size={28} />;

      case "camera":
        return <Camera className="text-blue-500" size={28} />;

      default:
        return <Briefcase className="text-gray-500" size={28} />;
    }
  };

  const getIconBg = () => {
    switch (task.priority) {
      case "High":
        return "bg-red-100";

      case "Medium":
        return "bg-orange-100";

      case "Low":
        return "bg-green-100";

      default:
        return "bg-gray-100";
    }
  };

  const getPriorityColor = () => {
    switch (task.priority) {
      case "High":
        return "bg-red-100 text-red-600";

      case "Medium":
        return "bg-orange-100 text-orange-600";

      case "Low":
        return "bg-green-100 text-green-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getDueColor = () => {
    switch (task.priority) {
      case "High":
        return "text-red-500";

      case "Medium":
        return "text-orange-500";

      case "Low":
        return "text-gray-500";

      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition p-6 flex items-center justify-between">

      {/* Left Side */}
      <div className="flex items-center gap-5">

        <input
          type="checkbox"
          className="w-5 h-5 rounded"
        />

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${getIconBg()}`}
        >
          {getIcon()}
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            {task.title}
          </h2>

          <p className="text-violet-600 font-medium text-sm mt-1">
            {task.trip}
          </p>

          <p className="text-gray-500 mt-1">
            {task.description}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-10">

        <div className="text-right">
          <div
            className={`flex items-center gap-2 ${getDueColor()}`}
          >
            <Calendar size={18} />

            <span className="font-medium">
              {task.status}
            </span>
          </div>

          <p className="text-gray-500 mt-1">
            {task.date}
          </p>
        </div>

        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${getPriorityColor()}`}
        >
          {task.priority}
        </span>

        <button>
          <MoreVertical className="text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;