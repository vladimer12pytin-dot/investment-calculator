// Переводы
const translations = {
    ru: {
        title: "💰 Инвестор-Калькулятор",
        subtitle: "Рассчитай свою будущую прибыль",
        calculator_title: "Калькулятор сложных процентов",
        include_tax: "Учесть налоги",
        investment_amount: "Сумма вклада",
        interest_rate: "Годовая процентная ставка",
        investment_period: "Срок инвестирования (лет)",
        topup_amount: "Сумма пополнения",
        topup_frequency: "Период пополнения",
        no_topup: "Не пополнять",
        monthly: "Каждый месяц",
        every_3_months: "Каждые 3 месяца",
        every_6_months: "Каждые 6 месяцев",
        annually: "Каждый год",
        tax_rate: "Налоговая ставка (%)",
        calculate_button: "Рассчитать прибыль",
        result_title: "Результаты расчета",
        initial_amount: "Начальная сумма:",
        total_invested: "Всего вложено:",
        final_amount: "Итоговая сумма:",
        profit: "Ваша прибыль:",
        tax_amount: "Сумма налога:",
        net_profit: "Чистая прибыль:",
        period: "Через:",
        footer: "© 2024 Инвестор-Калькулятор. Все расчеты приблизительные.",
        error: "Пожалуйста, заполните все поля корректными положительными числами!"
    },
    en: {
        title: "💰 Investor Calculator",
        subtitle: "Calculate your future profit",
        calculator_title: "Compound Interest Calculator",
        include_tax: "Include taxes",
        investment_amount: "Investment amount",
        interest_rate: "Annual interest rate",
        investment_period: "Investment period (years)",
        topup_amount: "Top-up amount",
        topup_frequency: "Top-up frequency",
        no_topup: "No top-up",
        monthly: "Monthly",
        every_3_months: "Every 3 months",
        every_6_months: "Every 6 months",
        annually: "Annually",
        tax_rate: "Tax rate (%)",
        calculate_button: "Calculate profit",
        result_title: "Calculation results",
        initial_amount: "Initial amount:",
        total_invested: "Total invested:",
        final_amount: "Final amount:",
        profit: "Your profit:",
        tax_amount: "Tax amount:",
        net_profit: "Net profit:",
        period: "In:",
        footer: "© 2024 Investor Calculator. All calculations are approximate.",
        error: "Please fill in all fields with valid positive numbers!"
    },
    uk: {
        title: "💰 Інвестор-Калькулятор",
        subtitle: "Розрахуй свій майбутній прибуток",
        calculator_title: "Калькулятор складних відсотків",
        include_tax: "Врахувати податки",
        investment_amount: "Сума вкладу",
        interest_rate: "Річна процентна ставка",
        investment_period: "Срок інвестування (років)",
        topup_amount: "Сума поповнення",
        topup_frequency: "Період поповнення",
        no_topup: "Не поповнювати",
        monthly: "Щомісячно",
        every_3_months: "Кожні 3 місяці",
        every_6_months: "Кожні 6 місяців",
        annually: "Щорічно",
        tax_rate: "Податкова ставка (%)",
        calculate_button: "Розрахувати прибуток",
        result_title: "Результати розрахунку",
        initial_amount: "Початкова сума:",
        total_invested: "Всього вкладено:",
        final_amount: "Кінцева сума:",
        profit: "Ваш прибуток:",
        tax_amount: "Сума податку:",
        net_profit: "Чистий прибуток:",
        period: "Через:",
        footer: "© 2024 Інвестор-Калькулятор. Всі розрахунки приблизні.",
        error: "Будь ласка, заповніть всі поля коректними додатними числами!"
    },
    de: {
        title: "💰 Investor-Rechner",
        subtitle: "Berechne deinen zukünftigen Gewinn",
        calculator_title: "Zinseszins-Rechner",
        include_tax: "Steuern einbeziehen",
        investment_amount: "Anlagesumme",
        interest_rate: "Jährlicher Zinssatz",
        investment_period: "Anlagezeitraum (Jahre)",
        topup_amount: "Nachschussbetrag",
        topup_frequency: "Nachschusshäufigkeit",
        no_topup: "Kein Nachschuss",
        monthly: "Monatlich",
        every_3_months: "Alle 3 Monate",
        every_6_months: "Alle 6 Monate",
        annually: "Jährlich",
        tax_rate: "Steuersatz (%)",
        calculate_button: "Gewinn berechnen",
        result_title: "Berechnungsergebnisse",
        initial_amount: "Anfangssumme:",
        total_invested: "Gesamt investiert:",
        final_amount: "Endsumme:",
        profit: "Ihr Gewinn:",
        tax_amount: "Steuerbetrag:",
        net_profit: "Nettogewinn:",
        period: "In:",
        footer: "© 2024 Investor-Rechner. Alle Berechnungen sind ungefähr.",
        error: "Bitte füllen Sie alle Felder mit gültigen positiven Zahlen aus!"
    },
    fr: {
        title: "💰 Calculateur d'Investissement",
        subtitle: "Calculez votre futur profit",
        calculator_title: "Calculateur d'intérêts composés",
        include_tax: "Inclure les taxes",
        investment_amount: "Montant de l'investissement",
        interest_rate: "Taux d'intérêt annuel",
        investment_period: "Période d'investissement (années)",
        topup_amount: "Montant du réapprovisionnement",
        topup_frequency: "Fréquence de réapprovisionnement",
        no_topup: "Pas de réapprovisionnement",
        monthly: "Mensuellement",
        every_3_months: "Tous les 3 mois",
        every_6_months: "Tous les 6 mois",
        annually: "Annuellement",
        tax_rate: "Taux de taxe (%)",
        calculate_button: "Calculer le profit",
        result_title: "Résultats du calcul",
        initial_amount: "Montant initial:",
        total_invested: "Total investi:",
        final_amount: "Montant final:",
        profit: "Votre profit:",
        tax_amount: "Montant de la taxe:",
        net_profit: "Profit net:",
        period: "Dans:",
        footer: "© 2024 Calculateur d'Investissement. Tous les calculs sont approximatifs.",
        error: "Veuillez remplir tous les champs avec des nombres positifs valides!"
    },
    es: {
        title: "💰 Calculadora de Inversiones",
        subtitle: "Calcula tu beneficio futuro",
        calculator_title: "Calculadora de interés compuesto",
        include_tax: "Incluir impuestos",
        investment_amount: "Monto de inversión",
        interest_rate: "Tasa de interés anual",
        investment_period: "Período de inversión (años)",
        topup_amount: "Monto de recarga",
        topup_frequency: "Frecuencia de recarga",
        no_topup: "Sin recarga",
        monthly: "Mensualmente",
        every_3_months: "Cada 3 meses",
        every_6_months: "Cada 6 meses",
        annually: "Anualmente",
        tax_rate: "Tasa de impuesto (%)",
        calculate_button: "Calcular beneficio",
        result_title: "Resultados del cálculo",
        initial_amount: "Monto inicial:",
        total_invested: "Total invertido:",
        final_amount: "Monto final:",
        profit: "Tu beneficio:",
        tax_amount: "Monto de impuesto:",
        net_profit: "Beneficio neto:",
        period: "En:",
        footer: "© 2024 Calculadora de Inversiones. Todos los cálculos son approximados.",
        error: "¡Por favor complete todos los campos con números positivos válidos!"
    },
    cn: {
        title: "💰 投资计算器",
        subtitle: "计算您的未来利润",
        calculator_title: "复利计算器",
        include_tax: "包括税收",
        investment_amount: "投资金额",
        interest_rate: "年利率",
        investment_period: "投资期限 (年)",
        topup_amount: "充值金额",
        topup_frequency: "充值频率",
        no_topup: "不充值",
        monthly: "每月",
        every_3_months: "每3个月",
        every_6_months: "每6个月",
        annually: "每年",
        tax_rate: "税率 (%)",
        calculate_button: "计算利润",
        result_title: "计算结果",
        initial_amount: "初始金额:",
        total_invested: "总投资:",
        final_amount: "最终金额:",
        profit: "您的利润:",
        tax_amount: "税额:",
        net_profit: "净利润:",
        period: "在:",
        footer: "© 2024 投资计算器. 所有计算均为近似值.",
        error: "请在所有字段中填写有效的正数!"
    },
    jp: {
        title: "💰 投資計算機",
        subtitle: "将来の利益を計算",
        calculator_title: "複利計算機",
        include_tax: "税金を含む",
        investment_amount: "投資额",
        interest_rate: "年間利率",
        investment_period: "投資期間 (年)",
        topup_amount: "追加投資額",
        topup_frequency: "追加投資頻度",
        no_topup: "追加投資なし",
        monthly: "毎月",
        every_3_months: "3ヶ月ごと",
        every_6_months: "6ヶ月ごと",
        annually: "毎年",
        tax_rate: "税率 (%)",
        calculate_button: "利益を計算",
        result_title: "計算結果",
        initial_amount: "初期金額:",
        total_invested: "総投資額:",
        final_amount: "最終金額:",
        profit: "利益:",
        tax_amount: "税額:",
        net_profit: "純利益:",
        period: "後:",
        footer: "© 2024 投資計算機. すべての計算は近似値です.",
        error: "すべてのフィールドに有効な正の数を入力してください!"
    }
};

// Символы валют
const currencySymbols = {
    RUB: '₽',
    USD: '$',
    EUR: '€',
    UAH: '₴',
    CNY: '¥',
    JPY: '¥',
    GBP: '£',
    CHF: '₣',
    KRW: '₩',
    INR: '₹'
};

let currentLang = 'ru';
let currentFrequency = 0;

// Функция для обновления текста
function updateElementText(element, key) {
    if (translations[currentLang] && translations[currentLang][key]) {
        element.textContent = translations[currentLang][key];
    }
}

// Переключение языка
function changeLanguage(lang) {
    currentLang = lang;
    document.getElementById('language').value = lang;
    
    // Обновляем все элементы с переводами
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        updateElementText(element, key);
    });
}

// Переключение частоты пополнения
function setFrequency(freq) {
    currentFrequency = parseInt(freq);
    
    // Обновляем активные кнопки
    document.querySelectorAll('.freq-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.freq) === currentFrequency) {
            btn.classList.add('active');
        }
    });
}

// Переключение налогов
function toggleTax() {
    const taxToggle = document.getElementById('taxToggle');
    const taxField = document.querySelector('.tax-field');
    const taxResults = document.querySelectorAll('.tax-result');
    
    if (taxToggle.checked) {
        taxField.style.display = 'block';
        taxResults.forEach(item => item.style.display = 'flex');
    } else {
        taxField.style.display = 'none';
        taxResults.forEach(item => item.style.display = 'none');
        document.getElementById('taxRate').value = '';
    }
    
    document.getElementById('result').classList.remove('show');
}

// Получение текущей валюты
function getCurrentCurrency() {
    return document.getElementById('currency').value;
}

// Получение символа валюты
function getCurrencySymbol(currency) {
    return currencySymbols[currency] || '$';
}

// Форматирование денежной суммы
function formatCurrency(amount, currency) {
    const symbol = getCurrencySymbol(currency);
    const options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    const formattedAmount = new Intl.NumberFormat(currentLang === 'ru' ? 'ru-RU' : 'en-US', options).format(amount);
    return `${formattedAmount} ${symbol}`;
}

// Расчет с учетом пополнений
function calculateWithTopups(principal, rate, time, topupAmount, frequency, currency) {
    let total = principal;
    let totalInvested = principal;
    const monthlyRate = rate / 100 / 12;
    const months = time * 12;
    
    for (let month = 1; month <= months; month++) {
        total *= (1 + monthlyRate);
        
        if (frequency > 0 && month % frequency === 0) {
            total += topupAmount;
            totalInvested += topupAmount;
        }
    }
    
    return {
        amount: total,
        profit: total - totalInvested,
        totalInvested: totalInvested
    };
}

// Расчет
function calculate() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const topupAmount = parseFloat(document.getElementById('topupAmount').value) || 0;
    const currency = getCurrentCurrency();
    const includeTax = document.getElementById('taxToggle').checked;

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        alert(translations[currentLang].error);
        return;
    }

    const result = calculateWithTopups(principal, rate, time, topupAmount, currentFrequency, currency);
    
    if (includeTax) {
        const taxRate = parseFloat(document.getElementById('taxRate').value);
        if (isNaN(taxRate) || taxRate < 0 || taxRate > 100) {
            alert(translations[currentLang].error);
            return;
        }
        calculateWithTax(principal, result.amount, result.profit, taxRate, time, currency, result.totalInvested);
    } else {
        displayResults(principal, result.amount, result.profit, 0, result.profit, time, currency, false, result.totalInvested);
    }
}

// Расчет с учетом налогов
function calculateWithTax(initialAmount, amount, grossProfit, taxRate, time, currency, totalInvested) {
    const taxAmount = grossProfit * (taxRate / 100);
    const netProfit = grossProfit - taxAmount;
    const netAmount = totalInvested + netProfit;
    
    displayResults(initialAmount, netAmount, grossProfit, taxAmount, netProfit, time, currency, true, totalInvested);
}

// Показ результатов
function displayResults(initialAmount, amount, profit, taxAmount, netProfit, time, currency, showTax, totalInvested) {
    const yearsText = getYearsText(time);
    
    document.getElementById('result-principal').textContent = formatCurrency(initialAmount, currency);
    document.getElementById('result-total-invested').textContent = formatCurrency(totalInvested, currency);
    document.getElementById('result-amount').textContent = formatCurrency(amount, currency);
    document.getElementById('result-profit').textContent = formatCurrency(profit, currency);
    document.getElementById('result-time').textContent = time + ' ' + yearsText;
    
    if (showTax) {
        document.getElementById('result-tax').textContent = formatCurrency(taxAmount, currency);
        document.getElementById('result-net').textContent = formatCurrency(netProfit, currency);
    }
    
    document.getElementById('result').classList.add('show');
    
    const resultItems = document.querySelectorAll('.result-item');
    resultItems.forEach((item, index) => {
        if (item.style.display !== 'none') {
            item.style.animation = 'none';
            setTimeout(() => {
                item.style.animation = `slideInUp 0.4s ease ${index * 0.1}s forwards`;
            }, 10);
        }
    });
}

// Текст для лет
function getYearsText(years) {
    if (currentLang === 'ru') {
        if (years % 10 === 1 && years % 100 !== 11) return 'год';
        if (years % 10 >= 2 && years % 10 <= 4 && (years % 100 < 10 || years % 100 >= 20)) return 'года';
        return 'лет';
    } else {
        return years === 1 ? 'year' : 'years';
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики событий
    document.getElementById('taxToggle').addEventListener('change', toggleTax);
    
    document.getElementById('language').addEventListener('change', function() {
        changeLanguage(this.value);
    });
    
    document.getElementById('currency').addEventListener('change', function() {
        if (document.getElementById('result').classList.contains('show')) {
            calculate();
        }
    });

    // Обработчики для кнопок частоты пополнения
    document.querySelectorAll('.freq-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setFrequency(this.dataset.freq);
        });
    });

    // Обработка Enter
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') calculate();
        });
    });

    // Инициализация
    changeLanguage('ru');
    setFrequency('0');
});