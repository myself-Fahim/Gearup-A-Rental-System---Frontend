# API Integration Map

This document maps each backend API endpoint to the frontend page(s) that consume it.

---

## 🔐 Authentication

| Endpoint | Method | Consumed By |
|---|---|---|
| `/api/auth/register` | `POST` | `gearup/app/(authGroup)/register/page.tsx` |
| `/api/auth/login` | `POST` | `gearup/app/(authGroup)/login/page.tsx` |
| `/api/auth/me` | `GET` | `gearup/app/(dashboardGroup)/dashboard/profile/page.tsx`<br>`gearup/app/(dashboardGroup)/provider-dashboard/profile/page.tsx`<br>`gearup/app/(dashboardGroup)/admin-dashboard/profile/page.tsx` |

---

## 🎒 Gear

| Endpoint | Method | Consumed By |
|---|---|---|
| `/api/gear` | `GET` | `gearup/app/(publicGroup)/gear/page.tsx` |
| `/api/gear/:id` | `GET` | `gearup/app/(publicGroup)/gear/[id]/page.tsx` |
| `/api/gear` | `POST` | `gearup/app/(dashboardGroup)/provider-dashboard/manage_inventory/page.tsx` |
| `/api/gear/:id` | `PATCH` | `gearup/app/(dashboardGroup)/provider-dashboard/manage_inventory/page.tsx` |
| `/api/gear/:id` | `DELETE` | `gearup/app/(dashboardGroup)/provider-dashboard/manage_inventory/page.tsx` |
| `/api/gear/admin` | `GET` | `gearup/app/(dashboardGroup)/admin-dashboard/manage_gears/page.tsx` |
| `/api/gear/my_gears` | `GET` | `gearup/app/(dashboardGroup)/provider-dashboard/manage_inventory/page.tsx` |

---

## 📦 Orders

| Endpoint | Method | Consumed By |
|---|---|---|
| `/api/orders` | `POST` | `gearup/app/(publicGroup)/gear/[id]/page.tsx` |
| `/api/orders/myorder` | `GET` | `gearup/app/(dashboardGroup)/dashboard/my-order/page.tsx` |
| `/api/orders/details/:id` | `GET` | `gearup/app/(dashboardGroup)/dashboard/my-order/[id]/page.tsx` |
| `/api/orders/provider/orders` | `GET` | `gearup/app/(dashboardGroup)/provider-dashboard/manage_order/page.tsx` |
| `/api/orders/provider/orders/:id` | `PATCH` | `gearup/app/(dashboardGroup)/provider-dashboard/manage_order/page.tsx` |
| `/api/orders` | `GET` | `gearup/app/(dashboardGroup)/admin-dashboard/rentals/page.tsx` |

---

## ⭐ Reviews

| Endpoint | Method | Consumed By |
|---|---|---|
| `/api/reviews` | `POST` | `gearup/app/(dashboardGroup)/dashboard/review/page.tsx` |

---

## 👤 User

| Endpoint | Method | Consumed By |
|---|---|---|
| `/api/user/:id` | `PATCH` | `gearup/app/(dashboardGroup)/admin-dashboard/manage_user/page.tsx` |
| `/api/user` | `GET` | `gearup/app/(dashboardGroup)/admin-dashboard/manage_user/page.tsx` |
| `/api/user/profile/:id` | `PATCH` | `gearup/app/(dashboardGroup)/dashboard/profile/page.tsx`<br>`gearup/app/(dashboardGroup)/provider-dashboard/profile/page.tsx`<br>`gearup/app/(dashboardGroup)/admin-dashboard/profile/page.tsx` |

---

## 💳 Payments

| Endpoint | Method | Consumed By |
|---|---|---|
| `/api/payments/checkout/:id` | `POST` | `gearup/app/(dashboardGroup)/dashboard/my-order/page.tsx` |
| `/api/payments/my` | `GET` | `gearup/app/(dashboardGroup)/dashboard/my-payments/page.tsx` |

---

## 🗂️ Categories

| Endpoint | Method | Consumed By |
|---|---|---|
| `/api/categories` | `GET` | `gearup/app/(dashboardGroup)/provider-dashboard/manage_inventory/page.tsx` |