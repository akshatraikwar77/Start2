<script>
    // ===== DATA =====
    const ranks = [
        { name: 'VIP', price: '₹99', period: '/month', icon: '👑', badge: 'Popular', features: ['Basic Permissions', '/fly Access', '1 Home Set', 'Chat Color'] },
        { name: 'VIP+', price: '₹249', period: '/month', icon: '⚡', badge: '⭐ Best Value', features: ['All VIP Features', '3 Home Sets', '/nick Command', 'Priority Queue'] },
        { name: 'MVP', price: '₹549', period: '/month', icon: '❄️', badge: '', features: ['All VIP+ Features', '5 Home Sets', '/kick Command', 'Exclusive MVP Chat'] },
        { name: 'MVP+', price: '₹999', period: '/month', icon: '⚛️', badge: '', features: ['All MVP Features', '10 Home Sets', '/mute Command', 'Discord Nitro Perks'] },
        { name: 'FLUX+', price: '₹1,200', period: '/month', icon: '🔥', badge: '👑 ULTIMATE', features: ['All MVP+ Features', 'Unlimited Homes', '/ban Command', 'Exclusive FLUX+ Role', '1 Free Hosting Plan'] }
    ];

    const keys = [
        { name: 'Basic', price: '₹10', icon: '🔑', features: ['Common Items', '1x Crate Key'] },
        { name: 'Epic', price: '₹30', icon: '🌟', features: ['Rare Items', '1x Epic Key'] },
        { name: 'Hyper', price: '₹50', icon: '⚡', features: ['Legendary Items', '1x Hyper Key'] },
        { name: 'Ace', price: '₹60', icon: '🃏', features: ['Mythic Items', '1x Ace Key'] },
        { name: 'Flux', price: '₹80', icon: '👑', badge: '🔥 ULTIMATE', features: ['God-Tier Items', '1x Flux Key', '5% Shard Bonus'] }
    ];

    const shards = [
        { amount: '100', price: '₹10' },
        { amount: '200', price: '₹20' },
        { amount: '500', price: '₹50', badge: '⭐ BEST VALUE' },
        { amount: '800', price: '₹80' },
        { amount: '1,000', price: '₹100' },
        { amount: '1,500', price: '₹150' }
    ];

    const budgetPlans = [
        { name: 'FLUX STONE', price: '₹200', period: '/month', icon: '🪨', features: ['🧠 4GB RAM', '⚙️ 2 vCores', '💾 10GB SSD', '👥 10 Players'] },
        { name: 'FLUX IRON', price: '₹300', period: '/month', icon: '🔩', features: ['🧠 6GB RAM', '⚙️ 4 vCores', '💾 15GB SSD', '👥 20 Players'] },
        { name: 'FLUX COPPER', price: '₹400', period: '/month', icon: '🪙', badge: '⭐ BEST VALUE', features: ['🧠 8GB RAM', '⚙️ 4 vCores', '💾 20GB SSD', '👥 30 Players'] },
        { name: 'FLUX REDSTONE', price: '₹800', period: '/month', icon: '🔴', features: ['🧠 16GB RAM', '⚙️ 6 vCores', '💾 35GB SSD', '👥 50 Players'] },
        { name: 'FLUX GOLD', price: '₹1,200', period: '/month', icon: '⭐', features: ['🧠 32GB RAM', '⚙️ 8 vCores', '💾 50GB SSD', '👥 Unlimited'] },
        { name: 'FLUX GHAST', price: '₹1,500', period: '/month', icon: '🔥', features: ['🧠 64GB RAM', '⚙️ 12 vCores', '💾 80GB SSD', '👥 Unlimited'] }
    ];

    const entryPlans = [
        { name: 'EPYC 4GB', price: '₹499', period: '/month', icon: '💎', features: ['🧠 4GB RAM', '⚙️ AMD EPYC', '💾 20GB SSD', '👥 30 Players'] },
        { name: 'EPYC 8GB', price: '₹899', period: '/month', icon: '⭐', badge: '⭐ POPULAR', features: ['🧠 8GB RAM', '⚙️ AMD EPYC', '💾 40GB SSD', '👥 60 Players'] },
        { name: 'EPYC 16GB', price: '₹1,800', period: '/month', icon: '🚀', features: ['🧠 16GB RAM', '⚙️ AMD EPYC', '💾 80GB SSD', '👥 120 Players'] }
    ];

    const premiumPlans = [
        { name: 'RYZEN 4GB', price: '₹399', period: '/month', icon: '💎', features: ['🧠 4GB DDR4', '⚙️ Ryzen 9 5900X', '💾 15GB NVMe', '👥 25 Players'] },
        { name: 'RYZEN 8GB', price: '₹799', period: '/month', icon: '⭐', badge: '⭐ MOST POPULAR', features: ['🧠 8GB DDR4', '⚙️ Ryzen 9 5900X', '💾 30GB NVMe', '👥 50 Players'] },
        { name: 'RYZEN 16GB', price: '₹1,600', period: '/month', icon: '🚀', features: ['🧠 16GB DDR4', '⚙️ Ryzen 9 5900X', '💾 60GB NVMe', '👥 100 Players'] },
        { name: 'RYZEN 32GB', price: '₹3,000', period: '/month', icon: '👑', features: ['🧠 32GB DDR4', '⚙️ Ryzen 9 5900X', '💾 120GB NVMe', '👥 200+ Players'] }
    ];

    const ryzenPlans = [
        { name: 'RYZEN 4GB', price: '₹1,299', period: '/month', icon: '💎', features: ['🧠 4GB DDR5', '⚙️ Ryzen 9 9950X', '💾 20GB NVMe', '👥 50 Players', '🔥 6.80GHz Turbo'] },
        { name: 'RYZEN 8GB', price: '₹1,999', period: '/month', icon: '⭐', badge: '⭐ MOST POPULAR', features: ['🧠 8GB DDR5', '⚙️ Ryzen 9 9950X', '💾 40GB NVMe', '👥 100 Players', '🔥 Zero CPU Steal'] },
        { name: 'RYZEN 16GB', price: '₹2,999', period: '/month', icon: '🚀', features: ['🧠 16GB DDR5', '⚙️ Ryzen 9 9950X', '💾 80GB NVMe', '👥 200+ Players', '🔥 Max Performance'] },
        { name: 'RYZEN 32GB', price: '₹5,499', period: '/month', icon: '👑', features: ['🧠 32GB DDR5', '⚙️ Ryzen 9 9950X', '💾 120GB NVMe', '👥 Unlimited', '🔥 Enterprise Power'] }
    ];

    // ===== RENDER FUNCTIONS =====
    function renderPlans(data, containerId, type) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = data.map(item => {
            let featuresHTML = item.features.map(f => `<li>✅ ${f}</li>`).join('');
            let badgeHTML = item.badge ? `<div class="plan-badge">${item.badge}</div>` : '';
            let priceHTML = item.period ? `${item.price} <span>${item.period}</span>` : item.price;
            let isFeatured = item.badge && (item.badge.includes('ULTIMATE') || item.badge.includes('BEST') || item.badge.includes('POPULAR'));
            return `
                <div class="plan-card ${isFeatured ? 'featured' : ''}">
                    ${badgeHTML}
                    <div class="plan-icon">${item.icon}</div>
                    <h3>${item.name}</h3>
                    <p class="plan-price">${priceHTML}</p>
                    <ul class="plan-features">${featuresHTML}</ul>
                    <button class="btn-plan" onclick="openOrder('${item.name} - ${item.price}${item.period || ''}')">${type === 'shard' ? 'Buy Now →' : 'Order Now →'}</button>
                </div>
            `;
        }).join('');
    }

    function renderShards(data, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = data.map(item => {
            let badgeHTML = item.badge ? `<div class="plan-badge">${item.badge}</div>` : '';
            return `
                <div class="plan-card ${item.badge ? 'featured' : ''}">
                    ${badgeHTML}
                    <div class="plan-icon">💎</div>
                    <h3>${item.amount} Shards</h3>
                    <p class="plan-price">${item.price}</p>
                    <button class="btn-plan" onclick="openOrder('${item.amount} Shards - ${item.price}')">Buy Now →</button>
                </div>
            `;
        }).join('');
    }

    // ===== POPULATE DROPDOWNS =====
    function populateDropdowns() {
        const smpSelect = document.getElementById('smpProduct');
        const hostingSelect = document.getElementById('hostingProduct');

        const smpOptions = [
            'VIP - ₹99/month', 'VIP+ - ₹249/month', 'MVP - ₹549/month',
            'MVP+ - ₹999/month', 'FLUX+ - ₹1,200/month',
            'Basic Key - ₹10', 'Epic Key - ₹30', 'Hyper Key - ₹50',
            'Ace Key - ₹60', 'Flux Key - ₹80',
            '100 Shards - ₹10', '200 Shards - ₹20', '500 Shards - ₹50',
            '800 Shards - ₹80', '1,000 Shards - ₹100', '1,500 Shards - ₹150'
        ];

        const hostingOptions = [
            'FLUX Stone - ₹200/month', 'FLUX Iron - ₹300/month',
            'FLUX Copper - ₹400/month', 'FLUX Redstone - ₹800/month',
            'FLUX Gold - ₹1,200/month', 'FLUX Ghast - ₹1,500/month',
            'EPYC 4GB - ₹499/month', 'EPYC 8GB - ₹899/month',
            'EPYC 16GB - ₹1,800/month',
            'RYZEN 4GB - ₹399/month', 'RYZEN 8GB - ₹799/month',
            'RYZEN 16GB - ₹1,600/month', 'RYZEN 32GB - ₹3,000/month',
            'RYZEN 4GB Premium - ₹1,299/month', 'RYZEN 8GB Premium - ₹1,999/month',
            'RYZEN 16GB Premium - ₹2,999/month', 'RYZEN 32GB Premium - ₹5,499/month'
        ];

        smpSelect.innerHTML = smpOptions.map(o => `<option value="${o}">${o}</option>`).join('');
        hostingSelect.innerHTML = hostingOptions.map(o => `<option value="${o}">${o}</option>`).join('');
    }

    // ===== NAVIGATION =====
    function showSection(section) {
        document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
        document.getElementById(section).classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ===== TAB NAVIGATIONS =====
    document.addEventListener('DOMContentLoaded', function() {
        // SMP Navigation
        document.querySelectorAll('.smp-nav button').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.smp-nav button').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                document.querySelectorAll('.smp-section').forEach(el => el.classList.remove('active'));
                const target = this.getAttribute('data-smp');
                document.getElementById('smp-' + target).classList.add('active');
            });
        });

        // Hosting Navigation
        document.querySelectorAll('.hosting-nav button').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.hosting-nav button').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                document.querySelectorAll('.hosting-section').forEach(el => el.classList.remove('active'));
                const target = this.getAttribute('data-hosting');
                document.getElementById('hosting-' + target).classList.add('active');
            });
        });

        // Render all plans
        renderPlans(ranks, 'ranks-grid');
        renderPlans(keys, 'keys-grid');
        renderShards(shards, 'shards-grid');
        renderPlans(budgetPlans, 'budget-grid');
        renderPlans(entryPlans, 'entry-grid');
        renderPlans(premiumPlans, 'premium-grid');
        renderPlans(ryzenPlans, 'ryzen-grid');
        populateDropdowns();
    });

    // ===== ORDER FORM =====
    function openOrder(product) {
        const activeSection = document.querySelector('.section.active');
        if (!activeSection) return;
        const quickOrder = activeSection.querySelector('.quick-order');
        if (!quickOrder) return;
        const select = quickOrder.querySelector('select');
        if (select) {
            select.value = product;
            const inputs = quickOrder.querySelectorAll('input');
            if (inputs.length > 0) inputs[0].focus();
        }
        quickOrder.scrollIntoView({ behavior: 'smooth' });
    }

    // ===== PLACE ORDER =====
    function placeOrder(type) {
        let product, ign, discord, form;

        if (type === 'smp') {
            product = document.getElementById('smpProduct').value;
            ign = document.getElementById('smpIgn').value.trim();
            discord = document.getElementById('smpDiscord').value.trim();
            form = document.getElementById('smpOrderForm');
        } else {
            product = document.getElementById('hostingProduct').value;
            ign = document.getElementById('hostingIgn').value.trim();
            discord = document.getElementById('hostingDiscord').value.trim();
            form = document.getElementById('hostingOrderForm');
        }

        if (!ign || !discord) {
            alert('⚠️ Please fill in your Minecraft IGN and Discord ID!');
            return;
        }

        const btn = form.querySelector('.order-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '⏳ Placing...';
        btn.disabled = true;

        sendToDiscord(product, ign, discord);

        setTimeout(() => {
            btn.innerHTML = '✅ Order Placed!';
            btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
            alert('✅ Order placed!\n📦 ' + product + '\n👤 ' + ign + '\n💬 ' + discord + '\n\n📌 We will contact you on Discord for payment.');

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
                if (type === 'smp') {
                    document.getElementById('smpIgn').value = '';
                    document.getElementById('smpDiscord').value = '';
                } else {
                    document.getElementById('hostingIgn').value = '';
                    document.getElementById('hostingDiscord').value = '';
                }
            }, 3000);
        }, 1500);
    }

    // ===== DISCORD WEBHOOK (UPDATED) =====
    function sendToDiscord(product, ign, discord) {
        const webhookURL = "https://discord.com/api/webhooks/1538170952884686909/oMIlmqcvLWdJlGpNwC5km6dhIGrfEWt_vRGaAvanyFeDprTfunWVaET82shSTyyscfA7";

        const embed = {
            title: "🛒 NEW ORDER!",
            color: 0x3B82F6,
            fields: [
                { name: "📦 Product", value: product, inline: true },
                { name: "👤 Minecraft IGN", value: ign, inline: true },
                { name: "💬 Discord", value: discord, inline: true },
                { name: "💰 Payment", value: "UPI / GPay / Paytm / PhonePe / Crypto", inline: false }
            ],
            footer: { text: "FluxGroups • Contact buyer for payment" },
            timestamp: new Date().toISOString()
        };

        fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ embeds: [embed] })
        })
        .then(response => {
            if (response.ok) {
                console.log('✅ Order sent to Discord!');
            } else {
                console.log('❌ Error:', response.status);
            }
        })
        .catch(err => console.log('Webhook error:', err));
    }

    console.log('🍯 FLUX GROUPS - Created by Akshat & Huzaifa');
    console.log('⚡ FluxSMP IP: play.fluxsmp.fun');
</script>
