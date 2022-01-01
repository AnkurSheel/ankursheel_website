---
title: 'What to do as an end-user when merchants using stripe decline your credit cards'
excerpt: 'My ongoing saga with Stripe support as an end-user to get them to stop blocking my card. A workaround while they try to resolve the issue'
coverImage: './cover.jpg'
tags:
- 'ramblings'
- 'stripe'
---

For a long time, merchants using Stripe to process payments have declined my cards. It took me a long time to figure out what was happening.

![A woman who enters her bank details while shopping online](./cover.jpg)

## What I  tried (unsuccessfully)

- I tried to use various cards, all of which work elsewhere (including overseas transactions).
- I tried to use cards in my wife's name, which also work elsewhere (including overseas transactions).
- I used both debit and credit cards.
- I spoke with my bank as suggested by various merchants. They confirmed there was no security holds on my account. They don't even see the failed transaction on their end.

## A light bulb goes on

Recently, I tried to place an order on a merchant using Stripe. As always, it got declined. On a whim, I decided to delete my account and recreate it in my wife's name. On placing an order using her account, the payment immediately went through. Remember, this is on the same merchant who had declined the payment from my account for the same card just a few minutes earlier.

This led me to conclude that Stripe is blocking the payments based on my email.

## So what can you do?

If you are using Gmail as an email provider, you can just add _**+merchant@gmail.com**_ to the email address, and this will create an alias for your Gmail account. This means that as far as Stripe is concerned, it's a different address from the one they blocked, but the emails from the merchant will still come to your email address.

If it's so simple to bypass the decline, you would think it would be easy to get Stripe to take the email off the blocklist. You can read about the ongoing saga below.

## The Stripe Saga: My Attempt to resolve this with Stripe support

With this new insight, I reached out to Stripe. I told them about the payments failing and my suspicion that the failure was because of my email and asked if there was some way to get my email off the blocklist. Unfortunately, Stripe needs a merchant to reach out to them to look at the issue. I haven't had much luck getting merchants to email stripe. Most merchants just suggest talking to the bank, which does not help when the bank does not even see the transaction.

Over 3 months and in multiple emails, I communicated to Stripe that merchants are not contacting them because they either don't understand that the email is an issue or they have better things to do with their time. Each time it was a (semi?)canned reply along the lines of, "please reach out to a merchant and ask them to contact us".

Finally, I sent them a screenshot showing Stripe's decline code as _"fraudulent"_. I also sent them the response from a merchant clearly stating that they(merchant) thinks I should reach out to Stripe as they don't think they(Stripe) would give them the information. I also told them I bypassed the fraudulent decline code by providing an alternate email address.

I was hoping that this would get Stripe to resolve the issue. But alas, I got the same canned reply.

After telling them that I was getting tired of this chicken and egg problem, they linked some text to send to the merchant. I have sent this to the merchant, but I don't think the merchant has much incentive to prioritise this.

I will update this section with any more progress.

## References

- [Creating alias email addresses on gmail](https://support.google.com/a/users/answer/9308648?hl=en)

_Cover Photo from [Unsplash](https://unsplash.com/photos/gf8e6XvG_3E)_
