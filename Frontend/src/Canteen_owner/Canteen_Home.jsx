import { useState } from 'react';
import { 
  Home, 
  Clock, 
  MessageSquare, 
  BarChart, 
  Package, 
  Settings, 
  LogOut, 
  Search,
  Check,
  X
} from 'lucide-react';

export default function Canteen_Home() {
  const [orders, setOrders] = useState([
    {
      id: "345",
      status: "completed",
      date: "05 Feb 2023, 08:28 PM",
      items: [
        {
          name: "Vegetable Mixups",
          description: "Vegetable Fritters with Egg",
          price: 5.30,
          quantity: 1,
          image: "/api/placeholder/60/60"
        },
        {
          name: "Chinese Takeout Disj",
          description: "Fresh Prawn mix salad",
          price: 5.30,
          quantity: 1,
          image: "/api/placeholder/60/60"
        }
      ]
    },
    {
      id: "346",
      status: "rejected",
      date: "05 Feb 2023, 08:28 PM",
      items: [
        {
          name: "Vegetable Mixups",
          description: "Vegetable Fritters with Egg",
          price: 5.30,
          quantity: 1,
          image: "/api/placeholder/60/60"
        },
        {
          name: "Chinese Takeout Disj",
          description: "Fresh Prawn mix salad",
          price: 5.30,
          quantity: 1,
          image: "/api/placeholder/60/60"
        }
      ]
    },
    {
      id: "347",
      status: "completed",
      date: "05 Feb 2023, 08:28 PM",
      items: [
        {
          name: "Baked Pasted Dishes",
          description: "Vegetable Fritters with Egg",
          price: 2.48,
          quantity: 1,
          image: "/api/placeholder/60/60"
        },
        {
          name: "Chinese Takeout Disj",
          description: "Fresh Prawn mix salad",
          price: 5.30,
          quantity: 1,
          image: "/api/placeholder/60/60"
        }
      ]
    },
    {
      id: "348",
      status: "completed",
      date: "05 Feb 2023, 08:28 PM",
      items: [
        {
          name: "Vegetable Mixups",
          description: "Vegetable Fritters with Egg",
          price: 5.30,
          quantity: 1,
          image: "/api/placeholder/60/60"
        },
        {
          name: "Chinese Takeout Disj",
          description: "Fresh Prawn mix salad",
          price: 5.30,
          quantity: 1,
          image: "/api/placeholder/60/60"
        }
      ]
    },
    {
      id: "349",
      status: "completed",
      date: "05 Feb 2023, 08:28 PM",
      items: [
        {
          name: "Vegetable Mixups",
          description: "Vegetable Fritters with Egg",
          price: 5.30,
          quantity: 1,
          image: "/api/placeholder/60/60"
        },
        {
          name: "Chinese Takeout Disj",
          description: "Fresh Prawn mix salad",
          price: 5.30,
          quantity: 1,
          image: "/api/placeholder/60/60"
        }
      ]
    },
    {
      id: "350",
      status: "rejected",
      date: "05 Feb 2023, 08:28 PM",
      items: [
        {
          name: "Baked Pasted Dishes",
          description: "Vegetable Fritters with Egg",
          price: 2.48,
          quantity: 1,
          image: "/api/placeholder/60/60"
        },
        {
          name: "Chinese Takeout Disj",
          description: "Fresh Prawn mix salad",
          price: 5.30,
          quantity: 1,
          image: "/api/placeholder/60/60"
        }
      ]
    },
    {
      id: "351",
      status: "pending",
      date: "05 Feb 2023, 08:28 PM",
      items: [
        {
          name: "Vegetable Mixups",
          description: "Vegetable Fritters with Egg",
          price: 5.30,
          quantity: 1,
          image: "/api/placeholder/60/60"
        },
        {
          name: "Chinese Takeout Disj",
          description: "Fresh Prawn mix salad",
          price: 5.30,
          quantity: 1,
          image: "/api/placeholder/60/60"
        }
      ]
    },
    {
      id: "352",
      status: "pending",
      date: "05 Feb 2023, 08:28 PM",
      items: []
    },
    {
      id: "353",
      status: "pending",
      date: "05 Feb 2023, 08:28 PM",
      items: []
    },
    {
      id: "354",
      status: "pending",
      date: "05 Feb 2023, 08:28 PM",
      items: []
    }
  ]);

  // Function to complete an order
  const completeOrder = (id) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === id ? { ...order, status: "completed" } : order
      )
    );
  };

  // Function to reject an order
  const rejectOrder = (id) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === id ? { ...order, status: "rejected" } : order
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center">
            <div className="mr-2 text-yellow-500">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 5L3 15L10 19V31L18 35L26 31V19L33 15L18 5Z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-xl font-bold">CLIPIN</span>
          </div>
        </div>
        <nav className="mt-6">
          <NavItem icon={<Home />} label="HOME" active />
          <NavItem icon={<Clock />} label="ORDER HISTORY" />
          <NavItem icon={<MessageSquare />} label="MESSAGES" />
          <NavItem icon={<BarChart />} label="STATISTICS" />
          <NavItem icon={<Package />} label="PRODUCTS" />
          <NavItem icon={<Settings />} label="SETTINGS" />
          <div className="mt-auto pt-20">
            <NavItem icon={<LogOut />} label="LOGOUT" />
          </div>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Search Bar */}
        <div className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
        </div>
        
        {/* Header */}
        <div className="px-6">
          <h1 className="text-2xl font-bold">Nice! We got a lot of Orders</h1>
          <h2 className="text-lg text-gray-600 mt-1">Order List</h2>
        </div>
        
        {/* Order Tabs */}
        <div className="px-6 mt-4 flex space-x-2 overflow-x-auto pb-2">
          {orders.map(order => (
            <OrderTab 
              key={order.id} 
              id={order.id} 
              status={order.status}
            />
          ))}
        </div>
        
        {/* Order Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.slice(0, 6).map(order => (
            <OrderCard 
              key={order.id}
              order={order}
              onComplete={completeOrder}
              onReject={rejectOrder}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <div className={`flex items-center px-6 py-3 ${active ? 'bg-yellow-50 border-l-4 border-yellow-500' : ''}`}>
      <div className={`mr-3 ${active ? 'text-yellow-500' : 'text-gray-500'}`}>
        {icon}
      </div>
      <span className={active ? 'font-semibold' : 'text-gray-600'}>
        {label}
      </span>
    </div>
  );
}

function OrderTab({ id, status }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-600 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-600 border-red-200';
      default:
        return 'bg-pink-50 text-pink-500 border-pink-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <Check size={16} className="text-green-600" />;
      case 'rejected':
        return <X size={16} className="text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex items-center px-4 py-2 rounded border ${getStatusColor(status)}`}>
      {getStatusIcon(status)}
      <span className="ml-1">#{id}</span>
    </div>
  );
}

function OrderCard({ order, onComplete, onReject }) {
  const { id, date, items, status } = order;
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Order #{id}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      
      <div className="p-4">
        {items.map((item, index) => (
          <div key={index} className="flex py-3 border-b last:border-0">
            <div className="w-12 h-15 rounded overflow-hidden mr-3">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-gray-50 flex items-center justify-between">
        <p className="text-sm text-gray-500">X{items.length} Items</p>
        
        {status === 'pending' && (
          <div className="flex space-x-2">
            <button 
              onClick={() => onReject(id)}
              className="p-2 rounded-lg bg-white border border-red-300 text-red-500"
            >
              <X size={16} />
            </button>
            <button 
              onClick={() => onComplete(id)}
              className="p-2 rounded-lg bg-white border border-green-300 text-green-500"
            >
              <Check size={16} />
            </button>
          </div>
        )}
        
        {status === 'rejected' && (
          <div className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm font-medium uppercase">
            Rejected
          </div>
        )}
        
        {status === 'completed' && (
          <div className="px-3 py-1 bg-green-100 text-green-600 rounded-lg text-sm font-medium uppercase">
            Completed
          </div>
        )}
      </div>
    </div>
  );
}