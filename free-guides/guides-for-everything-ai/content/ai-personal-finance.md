---
title: AI for Personal Finance & Admin
title_html: AI for Personal Finance <span class="soft">&amp; Admin</span>
subtitle: Budgets, bills, subscriptions, debt plans, tax paperwork and life admin, with your data handled safely
volume: 17
edition_label: Grok Edition
edition_note: "Written by Grok Bot, with facts checked against official sources in October 2026."
edition: October 2026
kicker: A Beginner's Manual
audience: For anyone who wants a clearer picture of their money and less paperwork, without handing over control
accent: "#15803D"
accent2: "#B45309"
motif: blocks
toc_compact: true
blurb: |
  AI assistants have become surprisingly good money helpers. They can sort a year of transactions into categories in seconds, spot subscriptions you forgot about, compare a snowball and an avalanche debt plan, draft a letter disputing a bill, and turn a shoebox of receipts into a tidy spreadsheet for your tax preparer.

  This manual shows you two ways to give an AI your financial data, **connected accounts through Plaid** (as in ChatGPT Finances, Perplexity and Grok Bot) or **CSV files you export yourself**, and how to choose between them. Then it walks through budgeting, bills, debt, savings, taxes and everyday admin, with prompts you can copy, a local Python analysis script, and a firm set of safety rules.

  **This manual is educational and is not financial, tax, legal or investment advice.** Features were checked on official pages on October 16, 2026.
disclaimer: This manual is for education only and is not financial, investment, tax or legal advice. AI tools make mistakes, including arithmetic and categorization errors; check every number against your statements and consult a qualified professional before decisions with financial, tax or legal consequences. Product features and availability were checked on official help pages and announcements on October 16, 2026, and vary by country and plan. Example numbers are illustrative and simplified.
---

# Money, Paperwork and AI

:::summary
- AI is excellent at **organizing, explaining, summarizing and drafting**. It is not a licensed adviser and it can get numbers wrong.
- You decide what data to share. You can connect accounts through Plaid, upload CSV exports, or just describe your situation.
- Three rules guard everything in this manual: **verify the math, protect identifiers, and keep decisions yours.**
:::

Most people don't avoid money tasks because they are hard. They avoid them because they are tedious: downloading statements, sorting transactions, reading fine print, writing the email to cancel a service. Those tedious parts are exactly what AI handles well.

## What AI does well with money

| Job | Example |
|---|---|
| Sorting | "Put these 412 transactions into 12 spending categories." |
| Spotting | "Which charges repeat monthly? Which went up this year?" |
| Explaining | "What does 'APR' versus 'APY' mean on these two offers?" |
| Comparing | "Compare these three phone plans for a family of four." |
| Planning | "Build a debt payoff plan with $200 extra a month." |
| Drafting | "Write a polite letter disputing this duplicate charge." |
| Organizing | "List the documents I need to give my tax preparer." |

## What AI should not do for you

- **Make the decision.** AI can lay out trade-offs; you choose. OpenAI's own help center says ChatGPT is not a fiduciary, registered investment adviser, broker-dealer, tax preparer or law firm, and the same is true of every general AI assistant.
- **Be trusted on arithmetic without checking.** Language models can add a column wrongly or miscount transactions. Ask the AI to show its working, or to use code (ChatGPT, Claude, Gemini and Grok can all run code in many plans), and spot-check against your statement.
- **Hold your secrets.** Never paste full account numbers, Social Security numbers, passwords, PINs or one-time codes into a chat.

> [!IMPORTANT]
> Throughout this manual, "AI" means a general assistant such as ChatGPT, Claude, Gemini, Grok or Perplexity. None of them is a substitute for a financial planner, accountant, tax professional or lawyer when the stakes are high.

## The three safety rules

:::checklist
- **Verify the math.** Every total the AI gives you should be checkable against a statement, a spreadsheet formula or a second calculation.
- **Protect identifiers.** Share amounts, dates and merchants, not account numbers, ID numbers or login details.
- **Keep decisions yours.** Use AI to prepare and explain; you approve, pay, sign and send.
:::

## Choosing an assistant

Any major assistant can work with financial data you paste or upload. Some can also connect directly to your accounts. The next chapters explain both routes in detail.

| Assistant | Direct account connection (checked October 16, 2026) | File upload and analysis |
|---|---|---|
| ChatGPT | **Finances**, U.S. only, via Plaid (accounts) and Experian (credit report); Free, Go, Plus and Pro | Yes |
| Perplexity | Account linking via Plaid for all users; deeper analysis with Computer on Pro and Max | Yes |
| Grok Bot | **Finance** integration via Plaid, read-only (announced by xAI on September 26, 2026) | Yes |
| Claude | No consumer bank connection released as of our check | Yes |
| Gemini | Indirectly: the **Google Wallet** connected app can use accounts you linked to Google Wallet through Plaid (U.S., personal accounts, rolling out gradually) | Yes |

# Two Ways to Share Your Data: Plaid or CSV

:::summary
- **Plaid** links your bank, card, loan and investment accounts to an app. Data then syncs automatically.
- **CSV** is a spreadsheet file you download from your bank and upload yourself. You see and control every row.
- Many people use both: Plaid for an ongoing dashboard, CSV for one-off deep dives or for accounts Plaid can't reach.
:::

## What Plaid is

Plaid is a company that sits between your financial institutions and the apps you choose. When an app asks to "connect your bank," it often opens Plaid's window. You pick your bank, sign in, and choose which accounts to share. Plaid then passes your account data to the app.

Facts from Plaid's consumer pages and OpenAI's help center (October 16, 2026):

- Plaid says it connects to more than 12,000 financial institutions and helps people share data with more than 9,000 apps.
- Plaid does not share your bank username and password with the app you connect.
- Data is transferred with encryption (Plaid cites AES-256 and TLS), and Plaid lists ISO 27001, ISO 27701 and SOC 2 certifications.
- Plaid is free for consumers; the app you connect pays Plaid.
- You can review and remove connections, or request deletion of your data, at **Plaid Portal** (my.plaid.com).

## What a CSV is

A **CSV** (comma-separated values) file is a plain-text spreadsheet: one row per transaction, with columns such as date, description and amount. Almost every bank and card issuer lets you download one from its website, usually from the account activity or statements page under a name like *Download*, *Export* or *Download transactions*. Some offer other formats such as OFX, QFX or Excel; CSV is the most universal.

```text title=What a bank CSV typically looks like
Date,Description,Amount,Balance
2026-09-01,PAYROLL ACME CORP,2450.00,3812.40
2026-09-02,NETFLIX.COM,-17.99,3794.41
2026-09-03,KROGER #512,-86.23,3708.18
2026-09-03,SHELL OIL 5741,-41.10,3667.08
```

Column names and sign conventions differ by bank. Some use one Amount column with negatives for spending; others have separate Debit and Credit columns.

## Plaid versus CSV, side by side

| | Connected accounts (Plaid) | CSV export |
|---|---|---|
| Setup | Minutes, once | A few minutes each time |
| Updates | Automatic syncing | Manual: download again |
| History | What your institution shares; sometimes limited | Often years, depending on the bank |
| What the AI sees | Balances, transactions, often holdings and loan details | Only the rows and columns you upload |
| Control | Choose accounts; disconnect anytime | Edit, redact or delete rows before sharing |
| Privacy | Ongoing data flow to the app and Plaid | One-time share of a file you inspected |
| Works with | Apps that support Plaid | Any AI that accepts files |
| Best for | Dashboards, ongoing tracking, "what's coming up?" | Deep dives, privacy, unsupported banks, one-off projects |

> [!TIP]
> Not sure? Start with CSV. It teaches you what your data looks like, it works with every assistant, and you can always connect accounts later once you know what you want from them.

## Questions to ask before connecting

:::checklist
- Which accounts does this app actually need? Connect only those.
- Is the connection read-only? (Most AI assistant connections are; confirm it.)
- How do I disconnect, and what happens to my synced data afterward?
- Is my financial data used to train models, and can I turn that off?
- Who else can see it: shared workspaces, family members, an employer's admin?
:::

# Connected Finance Assistants

:::summary
- **ChatGPT Finances** (U.S.) connects accounts through Plaid and your credit report through Experian, with a dashboard and finance-aware chat.
- **Perplexity**, **Grok Bot** and **Gemini** (through Google Wallet) also use Plaid-linked accounts.
- All of them are read-only: they can explain and plan, but they cannot move money or pay bills.
:::

## ChatGPT Finances

OpenAI's help center (updated early October 2026) describes Finances like this.

**Who can use it:** users in the U.S. on the Free, Go, Plus and Pro plans, on the web, iOS and Android.

**What you connect:** financial accounts through **Plaid**, and credit report data through **Experian**. These are separate connections; you can use either or both.

### Connect your accounts

:::steps
1. Open **Finances** in ChatGPT and select **Get started**, or type "@Finances, connect my accounts" in any chat.
2. Select **Connect with Plaid**.
3. Sign in to each financial institution and choose the accounts you want to share.
4. Return to ChatGPT. Syncing and categorizing usually takes a few minutes, occasionally several hours.
:::

### The dashboard

Depending on your data, the Finances page shows widgets for spend by category, spend this month, upcoming payments, subscriptions, bills, net worth, portfolio distribution, a market update for your holdings, and your credit score. Use the pencil icon to reorder or hide widgets.

### Asking questions

Ask from the Finances page or any chat; type **/finances** or **@finances** to point ChatGPT at your financial data. Examples from OpenAI's help center:

```prompt
Where did I spend the most money this month?
What subscriptions am I paying for?
Am I on pace to stay within my grocery budget?
Do I have any duplicate payments?
What's a practical plan to pay down my credit card debt?
Which card contributes most to my credit utilization?
```

When ChatGPT uses your connected data, it may cite the source transactions so you can check them.

### Financial memories

You can tell ChatGPT context it cannot see, such as "My rent is split with my partner" or "I'm saving for a car early next year." It saves these as **financial memories**, which you can view or delete from the Finances page (three-dot menu). You can also describe accounts that cannot be connected, like a private loan or a property.

### The credit report connection

The Experian connection shows your **VantageScore 3.0** and credit report, updates monthly, and is a soft inquiry that does not affect your score. Enter identity details in Experian's form, never in the chat. ChatGPT cannot file disputes, change your report or freeze your credit; contact Experian for those.

### What ChatGPT cannot do

ChatGPT cannot move money, pay bills, change account settings, make trades, change retirement contributions, open or close accounts, or file taxes, and OpenAI states that it does not act as your financial, legal, tax or investment adviser.

### Privacy controls

- **Temporary chats** do not access your connected finances or create memories.
- Model training follows your normal ChatGPT setting at **Settings > Data controls**.
- Disconnect at **Settings > Apps > Finances** or from the Finances page. Synced account data is deleted from OpenAI's systems within 30 days, and the associated Plaid data within 30 days under Plaid's policies.
- Disconnecting does not delete past conversations; delete those separately.

> [!WARNING]
> Spending totals can be wrong when transfers between your own accounts, credit card payments, reimbursements or pending duplicates are counted as spending. OpenAI's help center lists exactly these causes. Ask ChatGPT which transactions it included, and correct the categories.

## Perplexity

According to Plaid's April 9, 2026 announcement, all Perplexity users can link checking, savings, credit card, loan and investment accounts through Plaid and ask questions about their finances. Pro and Max subscribers can use **Perplexity Computer** for deeper analysis, such as building a net-worth dashboard, a monthly budget tracker or a debt payoff planner from their data.

```prompt
Using my credit card and loan balances, interest rates and minimum payments,
create a debt payoff plan. Show the avalanche and snowball orders side by side,
the months to debt-free for each, and the total interest for each.
```

## Grok Bot Finance

xAI announced on September 26, 2026 that **Grok Bot now connects to your finances**: link bank, card and investment accounts with the Finance integration, then ask the Bot to help with spending and investments. As reported at launch, connections are **read-only** through Plaid, Grok does not receive your bank credentials, and you can disconnect at any time. xAI's launch example had the Bot analyze a year of bank and card transactions to find recurring subscriptions, price increases and overlapping services.

Grok Bot can also run longer, multi-step jobs on its own computer, so it suits tasks like "build me a spreadsheet of every recurring charge in the last 12 months, grouped by merchant, with the first and latest price."

## Gemini through Google Wallet

In the U.S., Google Wallet can link bank and card accounts through Plaid (Google Wallet website: **Settings > Accounts linked with Plaid > Link an account**). The Gemini app's **Google Wallet** connected app, rolling out gradually to personal accounts in the U.S., can then give insights from those transactions, summarize spending and offer budgeting tips. It cannot make transactions or change your linked accounts.

> [!NOTE]
> Google's help page says that while an account is linked, Plaid and Google store details such as the card or account number, transaction history, balance and basic identity information. When you unlink it in Google Wallet, Google deletes the associated transaction history.

## Claude

As of October 16, 2026, Anthropic has not released a consumer feature for connecting bank accounts to Claude. (The Plaid connector in Claude's directory is a tool for developers who build with Plaid, not a way to link your own accounts.) Claude is still an excellent analyst for CSV files you upload, as the next chapter shows.

### Managing all your Plaid connections

If you use Plaid with several apps, **Plaid Portal** at my.plaid.com shows every app you have connected through Plaid. From there you can disconnect apps and request deletion of your data. Disconnecting inside one app (for example ChatGPT) does not affect the others.

:::checklist
- Review Plaid Portal every few months and remove apps you no longer use.
- When you close a bank account, remove it from every connected app.
- If an app shows **action required**, sign in to your bank directly and complete the prompt (a security question, new terms, a password reset), then reconnect.
- For "invalid credentials" errors, OpenAI suggests typing your login by hand rather than using autofill.
:::

# The CSV Route: Your Data, Your Rules

:::summary
- Download transactions from each bank and card as CSV.
- Clean and **redact** the file before you share it: remove account numbers and anything personal.
- Upload to any assistant and use structured prompts. Ask it to use code for the math.
:::

## Step 1: export

:::steps
1. Sign in to your bank's website (exports are often easier on a computer than in the phone app).
2. Open the account's activity or statements page and look for **Download**, **Export** or a download icon.
3. Choose **CSV** and a date range. For a first project, use the last 3 to 12 months.
4. Repeat for each account and card. Name files clearly: `checking-2026-01-to-09.csv`.
:::

## Step 2: inspect and redact

Open each file in a spreadsheet app (Excel, Google Sheets, Numbers) and look before you share.

:::checklist
- Delete any column that holds full account or card numbers.
- Search descriptions for names, phone numbers, addresses or reference codes you would rather not share, and shorten them (for example "ZELLE TO J SMITH 555-0100" becomes "ZELLE TO FRIEND").
- Remove the header rows some banks add above the column names.
- Keep Date, Description, Amount (or Debit and Credit) and, if you like, Category.
- Save as CSV again.
:::

> [!TIP]
> Make a "redacted" copy and keep the original untouched. If the AI makes a mistake, you can always go back to the source.

### Step 3: combine (optional)

If you have several files, either upload them all and ask the AI to combine them, or paste them into one sheet with an extra **Account** column. Make sure the sign convention is the same everywhere: spending negative, money in positive.

## Step 4: upload and analyze

All the major assistants accept CSV uploads. For anything involving totals, ask the assistant to use its code or analysis tool so the arithmetic is done by a program rather than estimated.

```prompt
I've uploaded 9 months of transactions (Date, Description, Amount, Account).
Negative amounts are spending, positive amounts are money in.
Please use code for all calculations.
1. Remove transfers between my own accounts and credit card payments
   (descriptions containing "TRANSFER", "PAYMENT THANK YOU", "AUTOPAY").
2. Assign each transaction one category from this list:
   Housing, Utilities, Groceries, Dining, Transport, Health, Insurance,
   Subscriptions, Shopping, Travel, Gifts, Income, Other.
3. Show a table of monthly totals by category, and a 9-month average.
4. List the 10 largest single expenses.
5. List anything you were unsure how to categorize, so I can decide.
Give me the categorized data back as a downloadable CSV.
```

## Step 5: check the result

:::checklist
- Pick one month and compare the AI's total spending with your statement.
- Look at the "unsure" list and correct categories; ask the AI to re-run.
- Check that income was not counted as spending (and vice versa).
- Save the categorized CSV; next month you only need to add new rows.
:::

## Which assistant for CSVs?

| Assistant | Good to know |
|---|---|
| ChatGPT | Runs Python on your uploaded files and returns charts and downloadable files |
| Claude | Strong at careful categorization and explaining reasoning; can run code where code execution is enabled |
| Gemini | Works well with Google Sheets and Drive files |
| Grok | Grok Bot can work on files on its own computer and produce spreadsheets |
| Perplexity | Good for pairing your numbers with current outside information, such as today's savings rates |

Any of them will do a good job with a clear prompt. The prompt matters more than the brand.

# Build a Budget With AI

:::summary
- A budget is a plan for your money, built from what you actually spend.
- AI turns your categorized transactions into a starting budget and helps you choose a method that fits you.
- Review monthly: compare plan to actual, adjust, repeat.
:::

## Start from reality

The most common budgeting mistake is guessing. Your categorized CSV (or your connected-accounts dashboard) shows what you really spend. Begin there.

```prompt
Here are my average monthly totals by category from the last 9 months:
[paste the table]
My take-home pay is about [amount] a month.
1. Show what share of take-home pay each category uses.
2. Point out the three categories with the most month-to-month variation.
3. Suggest a realistic first budget that frees up [amount] a month for savings,
   with the smallest possible changes. Explain each change in one sentence.
Do not suggest anything that requires me to change housing.
```

## Popular budgeting methods

Ask the AI to explain each in the context of your own numbers, then choose the one you will actually stick to.

| Method | How it works | Suits |
|---|---|---|
| **50/30/20** | Roughly 50% needs, 30% wants, 20% savings and extra debt payments | People who want a simple guideline |
| **Zero-based** | Every dollar of income is assigned a job until nothing is left unassigned | Detail lovers and tight budgets |
| **Envelope** | Fixed amounts per category; when an envelope is empty, spending stops | Overspenders in specific categories |
| **Pay yourself first** | Savings move automatically on payday; spend the rest freely | People who dislike tracking |

> [!NOTE]
> These are rules of thumb, not laws. If you live somewhere with high rent, a 50% "needs" target may be impossible. Use the method as a starting point and let the AI help you adapt it.

## The monthly review

Fifteen minutes a month keeps a budget alive.

:::steps
1. Export or sync last month's transactions and categorize them (reuse your prompt).
2. Ask: "Compare last month's actual spending with this budget: [paste]. Show over and under by category."
3. Ask: "For the categories I went over, list the five biggest transactions."
4. Decide on one change for next month. Just one.
5. Save the month's summary in a sheet or note so you can see trends.
:::

```prompt
Act as a friendly, non-judgmental budgeting coach.
Here is my budget and last month's actual spending: [paste both].
Give me: (1) one thing I did well, (2) the single biggest overspend and why
it probably happened, (3) one specific, small change for next month.
Keep it under 150 words.
```

# Subscriptions, Bills and Fees

:::summary
- Recurring charges are the easiest savings to find, and AI is very good at finding them.
- Look for forgotten subscriptions, price increases, duplicates and fees.
- Use AI to draft cancellation and negotiation messages; you send them.
:::

## Find every recurring charge

```prompt
From the uploaded transactions (12 months), find every charge that recurs
weekly, monthly, quarterly or yearly. For each, show:
merchant, frequency, first amount, latest amount, % change, last charge date,
and estimated yearly cost. Sort by yearly cost, highest first.
Then flag: (a) price increases, (b) two services that seem to do the same job,
(c) charges that stopped and restarted.
```

Yearly charges are the sneaky ones: domain names, software licenses, memberships. A 12-month export catches them; a 3-month one won't.

## Decide what to keep

For each subscription, ask yourself three questions: Did I use it last month? Would I sign up again today at this price? Is there a cheaper plan or a free alternative I'd be happy with? AI can help with the third question, but check current prices on the provider's own site, because AI knowledge of prices goes out of date quickly.

## Cancel and negotiate

```prompt
Write a short, polite message to cancel my [service] subscription.
Account email: [I'll fill this in]. Ask them to confirm cancellation in writing
and confirm I won't be charged again. No more than 80 words.
```

```prompt
I've been a [provider] internet customer for 4 years. My bill went from
$65 to $80 a month. Write a phone script to ask for a lower rate:
an opening line, two reasons, a question about current promotions,
and a polite line about considering other providers. Keep it natural.
```

> [!TIP]
> Many services make you cancel inside their own settings. Ask the AI "Where is the cancel option for [service]?" and then confirm on the company's help pages, since menus change.

### Hunt for fees

Ask the AI to list every transaction containing words like FEE, CHARGE, INTEREST, OVERDRAFT, LATE, FOREIGN or ATM. Then ask your bank about any you don't understand. Some can be waived if you ask, especially the first time.

# Debt Payoff Plans

:::summary
- **Avalanche** pays the highest interest rate first: least interest overall.
- **Snowball** pays the smallest balance first: quicker early wins.
- Let the AI run the numbers with code, then check the first few months by hand.
:::

## The two classic methods

In both methods you pay at least the minimum on every debt and put all extra money toward one target debt. When the target is paid off, its payment rolls into the next target.

| | Avalanche | Snowball |
|---|---|---|
| Target order | Highest interest rate first | Smallest balance first |
| Total interest | Lowest | Usually a little higher |
| Motivation | Slower first win | Fast first win |
| Best for | Disciplined savers focused on cost | People who need momentum |

## A worked example

This is a simplified illustration: interest compounds monthly at APR ÷ 12, minimum payments stay fixed, and no new charges are made.

| Debt | Balance | APR | Minimum |
|---|---|---|---|
| Card A | $3,000 | 24% | $90 |
| Card B | $1,200 | 18% | $36 |
| Store card | $400 | 29% | $25 |

The minimums add up to $151 a month. Suppose you can pay $351 a month in total ($200 extra).

| Plan | Months to debt-free | Total interest paid |
|---|---|---|
| Fixed $151/month, rolling freed payments forward | 46 | About $2,314 |
| Snowball with $351/month | 16 | About $756 |
| Avalanche with $351/month | 16 | About $701 |

The extra $200 a month saves roughly $1,560 to $1,610 in interest and 30 months. In this example the avalanche saves about $55 more than the snowball; with bigger balances or wider rate differences the gap grows.

> [!IMPORTANT]
> Real cards calculate interest daily, minimums change as balances fall, and promotional rates expire. Treat any AI or manual plan as an estimate, and check your statements and your card issuer's payoff calculator.

## Ask for your own plan

```prompt
My debts: [name, balance, APR, minimum payment for each].
I can pay [total] per month in total.
Use code. Simulate both avalanche and snowball month by month
(interest = balance x APR / 12 each month, minimums fixed, no new charges).
Show: months to debt-free, total interest, and the payoff month of each debt.
Then show the first 3 months of the avalanche plan as a table I can check by hand.
```

### Questions to ask, not answers to take

AI can explain options like balance-transfer cards, debt consolidation loans and hardship programs, and list the questions to ask a lender (fees, promotional period, what happens after it ends). It cannot judge whether a specific offer is right for you. For serious debt problems, a nonprofit credit counselor is a good next step.

# Saving Goals and Emergency Funds

:::summary
- Give every savings goal a name, an amount and a date.
- AI turns a goal into a monthly number and a plan.
- Automate the transfer so saving happens without willpower.
:::

## Turn goals into monthly numbers

```prompt
My goals:
1. Emergency fund: [amount] by [date]. I have [amount] now.
2. Car down payment: [amount] by [date].
3. Holiday: [amount] by [date].
I can save about [amount] a month. Show the monthly amount each goal needs,
whether my total is enough, and two ways to rebalance if it isn't
(e.g., push a date, reduce a goal). Use simple language.
```

## How big should an emergency fund be?

A common guideline is three to six months of essential expenses, more if your income is irregular or you support others. Use your categorized data to calculate *essential* monthly spending (housing, utilities, groceries, insurance, transport, minimum debt payments), not total spending.

```prompt
From my category averages, add up only essential expenses:
Housing, Utilities, Groceries, Insurance, Transport, Health and minimum debt
payments. Show 3-month and 6-month emergency fund targets.
```

### Comparing savings accounts

Ask AI to explain terms like APY, compounding, minimum balances and deposit insurance, and to build a comparison table. Then get the current rates from the banks' own websites or a search tool with live results, because rates change often. In the U.S., check that a bank is FDIC-insured (or a credit union NCUA-insured) using the regulators' own lookup tools.

# Analyze Your Spending Locally With Python

:::summary
- If you prefer not to upload transactions anywhere, analyze them on your own computer with a short Python script.
- The script below categorizes transactions by keyword rules and prints monthly totals.
- You can still ask an AI to help you write or extend the script without sharing the data.
:::

This uses **pandas**, the standard Python library for tables. If you are new to Python, Volume 14 shows you how to install it and set up a project. Then install pandas:

```bash title=Install pandas
pip install pandas
```

Save your redacted CSV as `transactions.csv` with columns Date, Description and Amount, then save this script beside it as `spending.py`.

```python title=spending.py
import pandas as pd

RULES = {
    "Groceries": ["KROGER", "ALDI", "WALMART GROCERY", "TRADER JOE"],
    "Dining": ["MCDONALD", "STARBUCKS", "DOORDASH", "CHIPOTLE"],
    "Transport": ["SHELL", "BP ", "UBER", "LYFT", "EXXON"],
    "Subscriptions": ["NETFLIX", "SPOTIFY", "APPLE.COM", "GOOGLE *"],
    "Utilities": ["ELECTRIC", "WATER", "GAS CO", "INTERNET"],
    "Income": ["PAYROLL", "DIRECT DEP"],
    "Transfers": ["TRANSFER", "PAYMENT THANK YOU", "AUTOPAY"],
}

def categorize(description: str) -> str:
    d = description.upper()
    for category, words in RULES.items():
        if any(w in d for w in words):
            return category
    return "Other"

df = pd.read_csv("transactions.csv", parse_dates=["Date"])
df["Category"] = df["Description"].apply(categorize)
df["Month"] = df["Date"].dt.to_period("M")

spend = df[(df["Amount"] < 0) & (df["Category"] != "Transfers")]
table = spend.pivot_table(index="Category", columns="Month",
                          values="Amount", aggfunc="sum", fill_value=0)
print((-table).round(2))
print("\nUncategorized examples:")
print(df[df["Category"] == "Other"]["Description"].value_counts().head(15))
df.to_csv("transactions_categorized.csv", index=False)
```

Run it:

```bash title=Run the script
python spending.py
```

Look at the "Uncategorized examples" list, add keywords to `RULES`, and run again. After two or three rounds, most transactions will sort themselves.

> [!TIP]
> Ask an AI: "Here is my Python budgeting script. Add a function that finds recurring charges: same merchant, similar amount, roughly monthly." Paste only the script, not your data. You get the benefits of AI without sharing a single transaction.

### Spreadsheet formulas, explained by AI

Prefer spreadsheets? AI is a patient formula tutor.

```prompt
In Google Sheets, column A has dates, B descriptions, C amounts
(negative = spending), D categories. Write formulas for:
1. total spending in "Groceries" for September 2026,
2. the average monthly spending per category,
3. a cell that turns red when a category is over its budget in column F.
Explain each formula in one sentence.
```

Typical answers use functions such as `SUMIFS`, `AVERAGEIFS` and conditional formatting. Test each formula on a few rows where you know the right answer.

# Money in Real Life: Special Situations

:::summary
- Irregular income, shared finances and big life events each need a slightly different approach.
- AI is a patient planner for "what do I need to think about?" questions.
- Use it to build checklists and conversation guides, then make the decisions with the people involved.
:::

## Irregular or freelance income

When income changes from month to month, a fixed monthly budget breaks. Two common approaches:

- **Budget on your lowest month.** Plan spending around your lowest typical income and treat anything above it as a bonus for savings, taxes and goals.
- **Pay yourself a salary.** All income goes into one "business" or holding account; you transfer a fixed amount to your spending account each month.

```prompt
My freelance income over the last 12 months was: [list monthly amounts].
My essential monthly expenses are about [amount].
1. What is my lowest, median and average month?
2. Suggest a fixed monthly "salary" I could pay myself, and how big a buffer
   I need in my holding account to keep paying it through slow months.
3. Remind me which tax topics freelancers usually need to discuss with a
   tax professional (don't give me tax amounts).
Use code for the statistics.
```

> [!NOTE]
> In the U.S., self-employed people often have to make estimated tax payments during the year. Ask a tax professional, or read the IRS's own pages on estimated taxes, before deciding how much to set aside.

## Couples and shared finances

Money is a common source of tension between partners. AI is useful here not as a referee but as a neutral organizer.

| Approach | How it works | Good when |
|---|---|---|
| Fully joint | All income into shared accounts; all bills paid together | Similar spending styles and full trust |
| Proportional | Each contributes to shared costs in proportion to income | Different incomes |
| Split evenly | Shared costs split 50/50; the rest stays separate | Similar incomes, independent styles |
| Hybrid | Joint account for shared bills plus individual "fun money" accounts | Most couples, at least at first |

```prompt
My partner and I earn [A] and [B] a month after tax. Our shared costs are
rent [amount], utilities [amount], groceries [amount], and other [amount].
Show how much each of us would pay under 50/50 and under a proportional split,
and what each of us would have left. Then give us five neutral questions to
discuss about money goals. Keep the tone friendly and non-judgmental.
```

## Big life events

Ask the AI for a checklist when something big is coming. It is good at remembering the small things people forget.

| Event | Ask for a checklist covering |
|---|---|
| Moving home | Address changes, deposits, utilities, insurance, voter registration, mail forwarding |
| New baby | Insurance changes, benefits, childcare costs, updating beneficiaries, a will |
| New job | Benefits enrollment deadlines, retirement plan options, final paycheck from the old job, health coverage gaps |
| Losing a job | Emergency budget, unemployment benefits, health coverage options, which bills to prioritize |
| Marriage or divorce | Name changes, joint accounts, beneficiaries, tax filing status questions |
| A death in the family | Who to notify, documents to find, accounts to close, when to involve a lawyer |

```prompt
I'm moving from an apartment in [city] to a house in [another city] on
[date]. Make a week-by-week checklist of money and admin tasks from 6 weeks
before to 4 weeks after the move. Include things people commonly forget.
```

> [!TIP]
> Copy the checklist into a to-do app or a sheet with due dates. Volume 7 shows how to track tasks and run a weekly review in Notion.

# Learning About Investing, Safely

:::summary
- Use AI as a teacher: it explains terms, concepts and trade-offs very well.
- Don't use it as a stock picker. Its knowledge can be out of date, and it cannot know your full situation.
- Check fees and facts at the source, and talk to a qualified, preferably fee-only, adviser for big decisions.
:::

## Good questions to ask an AI

```prompt
Explain like I'm new to investing:
1. What is the difference between a stock, a bond, an index fund and an ETF?
2. What is an expense ratio, and why do small differences matter over 30 years?
3. What does diversification mean, and what does it not protect me from?
4. What is the difference between a taxable brokerage account and a
   tax-advantaged retirement account, in general terms?
Use one short example for each. Don't recommend specific products.
```

## Let AI show you the effect of fees

Fees compound just like returns. Ask the AI to use code to compare the same starting amount over 30 years at two different annual fees, with a fixed assumed return. The point is not the exact numbers (future returns are unknown) but seeing how much a 1% difference in fees can add up to.

```prompt
Using code, compare $10,000 invested for 30 years with an assumed 6% yearly
return before fees, under annual fees of 0.1% and 1.0%. Show the ending value
for each and the difference. State clearly that the return is an assumption.
```

### Reviewing what you already own

If you have connected investment accounts (for example in ChatGPT Finances or Perplexity) or a CSV of holdings from your brokerage, you can ask for a plain-language summary: "What is my allocation between stocks, bonds and cash? Which holdings overlap? What are their expense ratios?" Check fund details on the fund provider's own fact sheet.

## Red flags in investment advice from anyone

:::checklist
- Guaranteed returns, or "no risk" claims.
- Pressure to decide quickly, or secrecy ("don't tell your bank").
- Unregistered sellers. In the U.S., you can look up brokers and advisers on FINRA BrokerCheck and the SEC's adviser search.
- Payment requested in crypto, gift cards or wire transfers.
- Tips from strangers on social media or messaging apps, including AI-generated "experts."
:::

> [!CAUTION]
> AI can describe a stock or fund confidently and still be wrong about its current price, fees or news. Volume 10 covers AI and trading in detail, including why no AI can reliably predict markets.

# Taxes and Records

:::summary
- AI can organize documents, explain terms and build checklists for your tax preparer. It does not replace one.
- Keep records as long as the law requires; the IRS publishes the periods.
- Never paste full Social Security numbers or tax IDs into a chat.
:::

## What AI can and can't do at tax time

| Good uses | Not a job for AI |
|---|---|
| Building a document checklist from last year's return | Deciding what you can legally deduct |
| Explaining a form or term in plain language | Filing your return |
| Totaling categorized expenses from a CSV (with code) | Guaranteeing accuracy |
| Drafting questions for your tax preparer | Representing you to the tax authority |
| Organizing receipts into folders and a summary sheet | Advising on complex situations (business, property, foreign income) |

OpenAI's help center describes the same boundary for ChatGPT Finances: it can organize information, explain concepts and point to areas to review, but it does not replace a tax professional and does not file taxes.

## A document checklist prompt

```prompt
I'm preparing for my U.S. tax return. Last year I had: a W-2 job,
a small freelance income, a savings account, a 401(k), student loan interest,
and I donated to charity. Make a checklist of documents to gather,
grouped by type, with a one-line explanation of each. Then list 10 questions
I should ask my tax preparer. Don't tell me what I can deduct; just flag topics.
```

## Receipts and expense summaries

:::steps
1. Snap photos or save PDFs of receipts into one folder per year, named `2026-09-14 Office Depot 42.10.pdf`.
2. Ask an AI with file support to read a batch and return a table: date, merchant, amount, category, file name.
3. Check the totals against your bank or card statement.
4. Give your tax preparer the table plus the folder.
:::

Volume 16 shows how to automate step 1: an email-to-Drive workflow can file receipts for you as they arrive.

## How long to keep records (U.S.)

The IRS's guidance "How long should I keep records?" (reviewed June 30, 2026) sets these periods for income tax records. Years count from when you filed, and a return filed early is treated as filed on the due date.

| Situation | Keep records for |
|---|---|
| Most people, in most years | 3 years |
| You file a claim for credit or refund after filing | 3 years from filing, or 2 years from paying the tax, whichever is later |
| You claim a loss from worthless securities or a bad debt deduction | 7 years |
| You fail to report income that is more than 25% of the gross income on your return | 6 years |
| You don't file a return, or file a fraudulent one | Indefinitely |
| Employment tax records | At least 4 years after the tax is due or paid, whichever is later |
| Records about property | Until the limitation period ends for the year you dispose of the property |

The IRS also recommends keeping copies of your filed returns, and notes that lenders or insurers may require you to keep some records longer.

> [!NOTE]
> Outside the U.S., the rules differ. Ask your AI to find your country's official tax authority guidance, then read it there.

# Everyday Life Admin

:::summary
- Use AI to read fine print, draft letters, fill in forms (by explaining them) and keep a household information system.
- Draft, then review. Anything you sign or send is your responsibility.
:::

## Reading contracts and fine print

```prompt
Here is the cancellation and renewal section of my gym contract.
In plain English: (1) how do I cancel, (2) how much notice is needed,
(3) are there fees, (4) when does it auto-renew, (5) anything unusual I
should know. Quote the exact sentence for each answer.
```

Asking for quotes keeps the AI honest: you can see whether its summary matches the text.

## Letters and emails

AI drafts are fastest when you give the facts and the goal.

```prompt
Write a firm but polite letter to [company] disputing a $129.00 charge on
September 12, 2026. Facts: I cancelled on August 30 (confirmation number
attached separately), I was charged anyway. Goal: a full refund within
14 days. Include a line saying I've kept records. Under 200 words.
```

Common admin letters AI handles well: billing disputes, refund requests, warranty claims, landlord repair requests, insurance claim follow-ups, requests for records, complaints to a regulator (after the company fails to respond).

### Understanding forms

Upload or paste a blank form (or describe it) and ask: "Explain each section of this form and what information it asks for. Which parts usually cause mistakes?" Then fill it in yourself. Do not paste a completed form with personal identifiers into a chat.

## Insurance and big purchases

```prompt
I'm comparing three car insurance quotes. Here are the coverages, deductibles
and prices (no personal details): [paste]. Make a side-by-side table, explain
what each coverage means, point out where the quotes are not like-for-like,
and list questions I should ask each insurer before deciding.
```

## A household information system

A simple, organized system makes emergencies and annual tasks much easier.

:::checklist
- One folder (paper or digital) per area: Home, Car, Health, Insurance, Taxes, Banking, Identity documents.
- A master list of accounts with **institution names and phone numbers only**, no passwords or full numbers. Use a password manager for logins.
- A yearly calendar of renewals: insurance, car registration, domains, memberships, warranties, subscriptions.
- An "if something happens to me" note telling a trusted person where things are.
:::

Ask AI to generate the yearly calendar from your list of renewals, or to turn your messy notes into an organized index.

# Scams and Safety

:::summary
- AI can help you spot scams: paste a suspicious message (with personal details removed) and ask what's off.
- Scammers use AI too: expect polished messages, cloned voices and fake websites.
- The defense never changes: don't act on urgency, and contact the organization through a number or site you already trust.
:::

## Ask AI for a second opinion

```prompt
I received this message (personal details removed). Is it likely a scam?
List the warning signs you see, what a legitimate version would look like,
and what I should do next. Message: [paste]
```

Common warning signs: urgency ("act within 24 hours"), unusual payment methods (gift cards, crypto, wire transfers), requests for codes or passwords, a sender address that doesn't match the company, links to look-alike sites, and offers that are too good to be true.

## Rules that beat every scam

:::checklist
- No legitimate organization needs your one-time passcode. Never read one out or type it into a chat.
- Hang up and call back using the number on your card or the official website.
- Verify family emergencies with a question only the real person could answer, or a pre-agreed code word.
- Turn on two-factor authentication for banking and email.
- Set up account alerts for large transactions and new payees.
:::

> [!CAUTION]
> Be careful with AI tools that can act for you. An assistant connected to your email and bank should never be allowed to send money or approve payments based on instructions found in an email or web page. Volume 18 covers prompt injection and other AI security risks.

## Protecting your data with AI tools

:::checklist
- Check each assistant's data controls and decide whether you allow your chats to be used for training.
- Use temporary or incognito chats for one-off financial questions you don't want stored (in ChatGPT, temporary chats also cannot access connected Finances).
- Delete conversations containing financial details when you're done with them.
- Review connected apps and Plaid Portal a few times a year.
- On shared or family accounts, remember others may see your chats.
:::

# Automating Money Admin

A few automations from Volume 16 pay off quickly for personal finance:

| Automation | How |
|---|---|
| File receipts automatically | Email with "receipt" label → save attachment to Drive → add a row to an expenses sheet |
| Weekly spending summary | Schedule → read the new rows of your categorized sheet → AI summary → email to you |
| Bill reminders | Calendar renewals sheet → three days before each date → notification |
| Price increase alerts | Monthly: compare this month's recurring charges with last month's in your sheet → alert on any increase |

> [!WARNING]
> Keep automations read-only where money is concerned. Let them collect, summarize and remind; do the paying yourself.

# Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| AI's total spending is far too high | Transfers, card payments or refunds counted as spending | Exclude transfers and payments; ask which transactions were included |
| Categories are inconsistent month to month | Prompt didn't fix the category list | Give a fixed list and ask for "Other" when unsure |
| Arithmetic is slightly off | Model estimated instead of calculating | Ask it to use code; check one month by hand |
| Bank not found in Plaid | Not supported, or listed under another name | Search other names; use CSV instead |
| "Action required" on a connection | Bank needs a security step or new terms | Sign in at the bank directly, then reconnect |
| Only a few months of history synced | Institution shares limited history | Upload older CSVs for longer analysis |
| CSV won't upload or looks garbled | Extra header lines or unusual encoding | Open in a spreadsheet, remove top lines, save as CSV (UTF-8) |
| Python script error: KeyError 'Date' | Column names differ | Rename columns in the CSV, or change the script |
| Finances option missing in ChatGPT | Outside the U.S., or still rolling out | Use the CSV route |

# Quick Reference {.unnumbered}

:::cheatsheet
- **Safety rules:** verify the math; protect identifiers; keep decisions yours
- **Plaid:** automatic sync; choose accounts; manage all apps at my.plaid.com
- **CSV:** export, redact, upload; ask the AI to use code for totals
- **ChatGPT Finances:** U.S.; Free, Go, Plus, Pro; /finances; disconnect at Settings > Apps > Finances
- **Others using Plaid:** Perplexity (Computer analysis on Pro and Max), Grok Bot Finance (read-only), Gemini via Google Wallet (rolling out)
- **Debt plans:** avalanche = highest rate first; snowball = smallest balance first
- **Emergency fund:** a common guideline is 3 to 6 months of essential expenses
- **IRS records:** generally 3 years; 6 or 7 years in some cases; keep filed returns
- **Scam rule:** never share one-time codes; call back on a number you trust
:::

### Sources (checked October 16, 2026)

- OpenAI: [Finances in ChatGPT](https://help.openai.com/en/articles/20001222-finances-in-chatgpt)
- Plaid: [How Plaid works for consumers](https://plaid.com/how-it-works-for-consumers/); [Plaid Portal](https://my.plaid.com); [Plaid and Perplexity expand integration](https://plaid.com/blog/plaid-perplexity-ai-financial-insights-integration/) (April 9, 2026)
- Google: [Manage your accounts linked with Plaid (US only)](https://support.google.com/googlepay/answer/10193349); Gemini Google Wallet connected app as reported by [9to5Google](https://9to5google.com/2026/09/28/google-wallet-gemini-app/) (September 28, 2026)
- xAI: Grok Bot Finance launch post on X (September 26, 2026), as reported by [PYMNTS](https://www.pymnts.com/news/artificial-intelligence/2026/grok-puts-the-ai-assistant-between-consumers-and-their-banks/)
- IRS: [How long should I keep records?](https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records)

# Glossary {.unnumbered}

:::glossary
- **APR:** annual percentage rate; the yearly cost of borrowing.
- **APY:** annual percentage yield; the yearly return on savings including compounding.
- **Avalanche method:** paying off the highest-interest debt first.
- **CSV:** a plain-text spreadsheet file, one row per record.
- **Emergency fund:** savings set aside for unexpected expenses or income loss.
- **Financial memories:** context you share with ChatGPT Finances that it remembers.
- **Plaid:** a service that connects financial accounts to apps you choose.
- **Plaid Portal:** Plaid's site for managing and deleting your connections.
- **Read-only access:** an app can see data but cannot move money or change accounts.
- **Redact:** remove sensitive details before sharing a document.
- **Snowball method:** paying off the smallest debt first.
- **Soft inquiry:** a credit check that does not affect your credit score.
- **VantageScore 3.0:** a credit scoring model with scores from 300 to 850.
- **Zero-based budget:** a budget where every dollar of income is assigned a purpose.
:::
