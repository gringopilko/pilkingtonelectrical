import { Car, Layers, PlugZap } from "lucide-react";

export const evApartmentOptions = [
  {
    icon: Car,
    title: "One owner, one charger",
    text: "A charger for a single car space, supplied from that owner's own meter or switchboard.",
    steps: [
      ["Check the supply", "I check the owner's switchboard, their supply and the route to their car space."],
      ["Approval", "The owners corporation approves the cable route through common property."],
      ["Install", "A dedicated circuit with its own RCBO (a circuit breaker and safety switch in one) runs to a wall mounted charger at the bay."],
      ["Billing", "The power is on the owner's own bill, so there is nothing to recharge."],
    ],
    note: "Simple and quick, where the owner's supply can reach their car space.",
  },
  {
    icon: Layers,
    title: "EV-ready building",
    text: "Install the backbone once, then connect chargers as owners switch to EVs.",
    steps: [
      ["Capacity first", "A maximum demand assessment on the main switchboard works out how much spare capacity can be set aside for charging."],
      ["Dedicated EV board", "A distribution board fed from the main switchboard, sized for the long term plan the committee approves, for example 20 bays."],
      ["Backbone", "One main cable or busway (a pre-made power rail) runs through the car park on cable tray, with a connection point near each bay. The owners corporation pays for this once."],
      ["Adding a charger later", "When an owner buys an EV, their charger connects to the nearest point on a short cable with its own RCBO. A quick job for that owner, not a new run from the main board every time."],
      ["Load management", "A controller caps total charging at the capacity set aside for it, so the building never sees more than that, however many cars are plugged in."],
    ],
    note: "The big, disruptive work happens once, everyone shares the same backbone, and each owner only pays for their own connection.",
  },
  {
    icon: PlugZap,
    title: "Shared charging",
    text: "Networked chargers for the car park that share power automatically and bill each user.",
    steps: [
      ["Networked chargers", "Smart chargers in allocated or shared bays, linked to a cloud management platform. Most use OCPP, the open standard chargers use to talk to these platforms."],
      ["Live monitoring", "A meter at the main switchboard reads the building's load in real time."],
      ["Dynamic load management", "Spare capacity is shared between the cars charging. Charging slows at peak times, like dinner time when everyone is cooking, and speeds up overnight."],
      ["Access", "Residents start a session with an app or RFID card, so only authorised users can charge and every session is logged."],
      ["Billing", "The platform bills each user per kWh, or produces usage reports so the manager can recharge through levies. The owners corporation is not paying for residents' charging."],
    ],
    note: "Suits buildings that want visitor or shared bays, or a fully managed system from day one.",
  },
];

/** Three ways to set up EV charging in an apartment building. `open` shows every step; otherwise each card has a tap-to-open "How it works". */
export function EvApartmentOptions({ open = false }: { open?: boolean }) {
  return (
    <div>
      <div className={`grid items-start gap-4 ${open ? "" : "sm:grid-cols-3"}`}>
        {evApartmentOptions.map((o) => {
          const body = (
            <ol className={open ? "mt-3 grid gap-3 sm:grid-cols-2" : "mt-3 space-y-3"}>
              {o.steps.map(([title, text], i) => (
                <li key={title} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-extrabold text-primary-foreground">{i + 1}</span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-bold text-foreground">{title}: </span>
                    {text}
                  </p>
                </li>
              ))}
              <li className={`rounded-lg bg-primary/5 p-3 text-sm font-medium leading-relaxed text-foreground ring-1 ring-primary/15 ${open ? "sm:col-span-2" : ""}`}>{o.note}</li>
            </ol>
          );
          return (
            <div key={o.title} className="flex flex-col rounded-xl bg-card p-4 ring-1 ring-border sm:p-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/25">
                <o.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-3 text-lg font-bold tracking-tight">{o.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
              {open ? (
                <div className="mt-3 border-t border-border pt-3">
                  <p className="text-sm font-bold text-primary">How it works</p>
                  {body}
                </div>
              ) : (
                <details className="mt-3 border-t border-border pt-3">
                  <summary className="cursor-pointer text-sm font-bold text-primary">How it works</summary>
                  {body}
                </details>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 rounded-xl bg-slate-900 p-4 text-sm font-medium leading-relaxed text-white sm:p-5">
        <span className="font-extrabold text-sky-300">My recommendation: </span>
        for most mid-size buildings the EV-ready backbone is the best fit. The committee approves one project and every owner benefits as they switch to EVs.
      </div>
    </div>
  );
}
