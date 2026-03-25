import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 表单提交逻辑
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: 'ri-phone-line',
      title: '客服热线',
      value: '400-888-6688',
      note: '周一至周五 9:00 - 18:00'
    },
    {
      icon: 'ri-mail-line',
      title: '官方邮箱',
      value: 'service@ruiying.com',
      note: '我们将在 1 个工作日内回复'
    },
    {
      icon: 'ri-building-line',
      title: '总部地址',
      value: '上海市浦东新区陆家嘴金融贸易区',
      note: '瑞盈国际金融中心 38 层'
    }
  ];

  const faqs = [
    '如何开始贷款咨询？',
    '贷款申请需要准备哪些基本材料？',
    '贷款申请的审批周期是多长？',
    '如何保障我的个人信息安全？',
    '遇到问题应如何反映？'
  ];

  return (
    <>
      <Header currentPage="contact" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            alt="" 
            className="w-full h-full object-cover object-top" 
            src="https://via.placeholder.com/1920x500/1B3A57/FFFFFF?text=Contact+Hero"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gold-500"></div>
            <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Contact Us</span>
            <div className="w-8 h-px bg-gold-500"></div>
          </div>
          <h1 className="font-serif text-5xl text-white mb-5">联系我们</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            无论您有任何问题或需求，我们的专业团队随时准备为您提供支持与解答。
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-gold-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-8 border border-gold-100 text-center hover:border-gold-300 transition-colors duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-navy-800 mx-auto mb-5">
                  <i className={`${info.icon} text-2xl text-gold-400`}></i>
                </div>
                <h3 className="font-serif text-navy-800 font-semibold text-base mb-2">{info.title}</h3>
                <p className="text-navy-700 font-medium text-sm mb-1">{info.value}</p>
                <p className="text-navy-500/60 text-xs">{info.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Contact Form */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-gold-500"></div>
                <span className="text-gold-600 text-xs font-medium tracking-widest uppercase">在线咨询</span>
                <div className="w-8 h-px bg-gold-500"></div>
              </div>
              <h2 className="font-serif text-3xl text-navy-800 mb-8">发送咨询消息</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-navy-700 mb-2">
                      您的姓名 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      placeholder="请输入您的姓名"
                      className="w-full px-4 py-3 text-sm border border-gold-200 rounded-lg focus:outline-none focus:border-navy-400 bg-gold-50/50 placeholder-navy-300"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy-700 mb-2">联系电话</label>
                    <input 
                      placeholder="请输入联系电话"
                      className="w-full px-4 py-3 text-sm border border-gold-200 rounded-lg focus:outline-none focus:border-navy-400 bg-gold-50/50 placeholder-navy-300"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-navy-700 mb-2">
                    电子邮箱 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    required
                    placeholder="请输入您的邮箱地址"
                    className="w-full px-4 py-3 text-sm border border-gold-200 rounded-lg focus:outline-none focus:border-navy-400 bg-gold-50/50 placeholder-navy-300"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-navy-700 mb-2">咨询类型</label>
                  <select 
                    name="subject"
                    className="w-full px-4 py-3 text-sm border border-gold-200 rounded-lg focus:outline-none focus:border-navy-400 bg-gold-50/50 text-navy-700 cursor-pointer"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option value="">请选择咨询类型</option>
                    <option>个人贷款咨询</option>
                    <option>企业贷款咨询</option>
                    <option>业务合作</option>
                    <option>投诉与建议</option>
                    <option>其他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-navy-700 mb-2">
                    咨询内容 <span className="text-red-500">*</span>
                    <span className="ml-2 text-navy-400">({charCount}/500)</span>
                  </label>
                  <textarea 
                    required
                    maxLength="500"
                    rows="5"
                    placeholder="请详细描述您的需求或问题，以便我们为您提供更有针对性的服务..."
                    className="w-full px-4 py-3 text-sm border border-gold-200 rounded-lg focus:outline-none focus:border-navy-400 bg-gold-50/50 placeholder-navy-300 resize-none"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-navy-800 text-white rounded-lg font-semibold hover:bg-navy-700 transition-all duration-300 disabled:opacity-60 whitespace-nowrap cursor-pointer"
                >
                  提交咨询
                </button>

                <p className="text-xs text-navy-400 text-center">
                  提交即表示您同意我们的隐私政策，我们将妥善保护您的个人信息
                </p>
              </form>
            </div>

            {/* FAQ Section */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-gold-500"></div>
                <span className="text-gold-600 text-xs font-medium tracking-widest uppercase">常见问题</span>
                <div className="w-8 h-px bg-gold-500"></div>
              </div>
              <h2 className="font-serif text-3xl text-navy-800 mb-8">您可能想了解的</h2>
              
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border rounded-xl overflow-hidden transition-colors duration-200 border-gold-100 hover:bg-gold-50 cursor-pointer"
                  >
                    <button className="w-full px-6 py-5 flex items-center justify-between text-left">
                      <span className="text-navy-800 font-medium text-sm pr-4">{faq}</span>
                      <div className="w-6 h-6 flex items-center justify-center shrink-0">
                        <i className="ri-add-line text-gold-500"></i>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;